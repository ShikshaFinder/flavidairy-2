"use client";

import { useState, useEffect } from "react";
import { MotionDiv, MotionButton } from "@/components/ui/motion-optimized";
import { slideInUp, fadeIn, primaryButtonVariants } from "@/lib/motionVariants";
import { initGA } from "@/lib/analytics";
import { Cookie, X, Settings } from "lucide-react";

type ConsentPreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show consent banner after a brief delay
      const timer = setTimeout(() => setShowConsent(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load existing preferences
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      // Initialize analytics based on saved preferences
      initializeAnalytics(savedPreferences.analytics);
    }
  }, []);

  const initializeAnalytics = (analyticsEnabled: boolean) => {
    if (analyticsEnabled) {
      // Initialize Google Analytics
      initGA();
      console.log("Analytics enabled");
    } else {
      // Analytics disabled by user choice
      console.log("Analytics disabled by user choice");
    }
  };

  const saveConsent = (consentPreferences: ConsentPreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(consentPreferences));
    setPreferences(consentPreferences);
    initializeAnalytics(consentPreferences.analytics);
    setShowConsent(false);
    setShowPreferences(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessaryOnly = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  const handlePreferenceChange = (
    type: keyof ConsentPreferences,
    value: boolean
  ) => {
    if (type === "necessary") return; // Necessary cookies cannot be disabled
    setPreferences((prev) => ({ ...prev, [type]: value }));
  };

  if (!showConsent) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 z-40" />

      {/* Cookie consent banner */}
      <MotionDiv
        variants={slideInUp}
        initial="hidden"
        animate="visible"
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="bg-white border-t border-neutral shadow-lg p-6">
          <div className="max-w-7xl mx-auto">
            {!showPreferences ? (
              <div className="flex items-start gap-4">
                <Cookie className="text-primary mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Cookie Consent
                  </h3>
                  <p className="text-sm text-black mb-4 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve
                    personalized content, and analyze our traffic. By clicking
                    "Accept All", you consent to our use of cookies.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <MotionButton
                      variants={primaryButtonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      onClick={acceptAll}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium"
                    >
                      Accept All
                    </MotionButton>
                    <MotionButton
                      onClick={acceptNecessaryOnly}
                      className="px-6 py-2 border border-neutral text-black rounded-lg font-medium hover:bg-neutral transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Decline
                    </MotionButton>
                    <MotionButton
                      onClick={() => setShowPreferences(true)}
                      className="px-6 py-2 text-primary border border-primary rounded-lg font-medium hover:bg-primary/5 transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Settings size={16} />
                      Manage
                    </MotionButton>
                  </div>
                </div>
              </div>
            ) : (
              <MotionDiv
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-black">
                    Manage Cookie Preferences
                  </h3>
                  <MotionButton
                    onClick={() => setShowPreferences(false)}
                    className="p-2 text-black hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </MotionButton>
                </div>

                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="flex items-center justify-between p-4 bg-neutral rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-black">
                        Necessary Cookies
                      </h4>
                      <p className="text-sm text-black mt-1">
                        Required for basic site functionality. Cannot be
                        disabled.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled={true}
                        className="w-4 h-4 text-primary bg-neutral border-neutral rounded focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between p-4 border border-neutral rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-black">
                        Analytics Cookies
                      </h4>
                      <p className="text-sm text-black mt-1">
                        Help us improve our website by collecting anonymous
                        usage data.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          handlePreferenceChange("analytics", e.target.checked)
                        }
                        className="w-4 h-4 text-primary bg-neutral border-neutral rounded focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-center justify-between p-4 border border-neutral rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-black">
                        Marketing Cookies
                      </h4>
                      <p className="text-sm text-black mt-1">
                        Used to deliver personalized advertising and track
                        campaign performance.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          handlePreferenceChange("marketing", e.target.checked)
                        }
                        className="w-4 h-4 text-primary bg-neutral border-neutral rounded focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-neutral">
                  <MotionButton
                    onClick={() => setShowPreferences(false)}
                    className="px-6 py-2 text-black hover:text-primary transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </MotionButton>
                  <MotionButton
                    variants={primaryButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={savePreferences}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium"
                  >
                    Save Preferences
                  </MotionButton>
                </div>
              </MotionDiv>
            )}
          </div>
        </div>
      </MotionDiv>
    </>
  );
}

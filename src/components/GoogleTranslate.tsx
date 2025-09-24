"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { MotionDiv, MotionButton } from "@/components/ui/motion-optimized";

interface GoogleTranslateProps {
  className?: string;
}

export function GoogleTranslate({ className = "" }: GoogleTranslateProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if Google Translate is already loaded
    if ((window as any).google && (window as any).google.translate) {
      setIsLoaded(true);
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector(
      'script[src*="translate.google.com"]'
    );
    if (existingScript) {
      setIsLoading(true);
      return;
    }

    setIsLoading(true);

    // Load Google Translate script with HTTPS
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    script.onload = () => {
      setIsLoading(false);
    };

    script.onerror = () => {
      setIsLoading(false);
      console.error("Failed to load Google Translate script");
    };

    document.head.appendChild(script);

    // Initialize Google Translate
    (window as any).googleTranslateElementInit = () => {
      try {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr,de,es,it,pt,ru,ja,ko,zh,ar,hi",
            layout: (window as any).google.translate.TranslateElement
              .InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to initialize Google Translate:", error);
        setIsLoaded(false);
      }
    };

    return () => {
      // Cleanup
      const scriptToRemove = document.querySelector(
        'script[src*="translate.google.com"]'
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      delete (window as any).googleTranslateElementInit;
    };
  }, []);

  const handleTranslateClick = () => {
    if (!isLoaded) {
      console.warn("Google Translate is not loaded yet");
      return;
    }

    // Try multiple selectors to find the translate dropdown
    const selectors = [
      ".goog-te-combo",
      ".goog-te-gadget-simple",
      "#google_translate_element .goog-te-gadget-simple",
      ".goog-te-menu-value",
    ];

    let translateElement = null;
    for (const selector of selectors) {
      translateElement = document.querySelector(selector);
      if (translateElement) break;
    }

    if (translateElement) {
      (translateElement as HTMLElement).click();
    } else {
      // Fallback: try to trigger the translate element directly
      const googleTranslateElement = document.getElementById(
        "google_translate_element"
      );
      if (googleTranslateElement) {
        const iframe = googleTranslateElement.querySelector("iframe");
        if (iframe) {
          iframe.click();
        }
      }
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <MotionButton
        type="button"
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral bg-white hover:bg-neutral-light transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-w-fit whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: isLoaded ? 1.02 : 1 }}
        whileTap={{ scale: isLoaded ? 0.98 : 1 }}
        onClick={handleTranslateClick}
        disabled={!isLoaded && !isLoading}
      >
        <Globe size={16} className="text-blue-600" />
        <span className="text-sm font-medium text-black">
          {isLoading ? "Loading..." : "Translate"}
        </span>
      </MotionButton>

      {/* Google Translate Element - Make it visible but positioned off-screen */}
      <div
        id="google_translate_element"
        className="absolute -top-96 left-0 opacity-0 pointer-events-none"
        style={{ zIndex: -1 }}
      ></div>

      {/* Custom styles for Google Translate */}
      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        .goog-te-gadget {
          font-family: inherit !important;
        }
        .goog-te-gadget-simple {
          background: transparent !important;
          border: none !important;
          font-size: 14px !important;
          padding: 0 !important;
          cursor: pointer !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value {
          color: #000 !important;
          cursor: pointer !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value:before {
          content: "🌐 " !important;
        }
        .goog-te-menu2 {
          background: white !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 8px !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
          z-index: 9999 !important;
        }
        .goog-te-menu2-item {
          padding: 8px 16px !important;
          font-size: 14px !important;
          cursor: pointer !important;
        }
        .goog-te-menu2-item:hover {
          background: #f3f4f6 !important;
        }
        .goog-te-menu2-item-selected {
          background: #dbeafe !important;
          color: #1e40af !important;
        }
        .goog-te-combo {
          cursor: pointer !important;
        }
        #google_translate_element {
          position: absolute !important;
          top: -9999px !important;
          left: -9999px !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value {
          display: none !important;
        }
      `}</style>
    </div>
  );
}

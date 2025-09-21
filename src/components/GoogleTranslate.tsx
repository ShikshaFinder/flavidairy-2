"use client";

import { useEffect } from "react";
import { Globe } from "lucide-react";
import { MotionDiv, MotionButton } from "@/components/ui/motion-optimized";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/motionVariants";

interface GoogleTranslateProps {
  className?: string;
}

export function GoogleTranslate({ className = "" }: GoogleTranslateProps) {
  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Translate
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,de,es,it,pt,ru,ja,ko,zh,ar,hi",
          layout: (window as any).google.translate.TranslateElement.InlineLayout
            .SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src*="translate.google.com"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <MotionButton
        type="button"
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral bg-white hover:bg-neutral-light transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-w-fit whitespace-nowrap"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          // Trigger Google Translate dropdown
          const translateElement = document.querySelector(".goog-te-combo");
          if (translateElement) {
            (translateElement as HTMLElement).click();
          }
        }}
      >
        <Globe size={16} className="text-blue-600" />
        <span className="text-sm font-medium text-black">Translate</span>
      </MotionButton>

      {/* Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>

      {/* Custom dropdown trigger */}
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
        }
        .goog-te-gadget-simple .goog-te-menu-value span {
          color: #000 !important;
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
        }
        .goog-te-menu2-item {
          padding: 8px 16px !important;
          font-size: 14px !important;
        }
        .goog-te-menu2-item:hover {
          background: #f3f4f6 !important;
        }
        .goog-te-menu2-item-selected {
          background: #dbeafe !important;
          color: #1e40af !important;
        }
      `}</style>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Languages } from "lucide-react";

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
      // Cleanup function
      const existingScript = document.querySelector(
        'script[src*="translate.google.com"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Google Translate Element */}
      <div id="google_translate_element" className="hidden" />

      {/* Custom Language Selector */}
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => {
          // Trigger Google Translate dropdown
          const translateElement = document.querySelector(
            ".goog-te-gadget-simple"
          );
          if (translateElement) {
            (translateElement as HTMLElement).click();
          }
        }}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">Translate</span>
      </Button>
    </div>
  );
}

// CSS for Google Translate styling
export const GoogleTranslateStyles = () => (
  <style jsx global>{`
    /* Hide Google Translate branding */
    .goog-te-banner-frame {
      display: none !important;
    }

    .goog-te-gadget-simple {
      background: transparent !important;
      border: none !important;
      font-size: 14px !important;
    }

    .goog-te-gadget-simple .goog-te-menu-value {
      color: #333 !important;
    }

    .goog-te-gadget-simple .goog-te-menu-value span:first-child {
      color: #333 !important;
    }

    .goog-te-gadget-simple .goog-te-menu-value span:last-child {
      color: #666 !important;
    }

    /* Style the dropdown */
    .goog-te-combo {
      background: white !important;
      border: 1px solid #e5e7eb !important;
      border-radius: 6px !important;
      padding: 8px 12px !important;
      font-size: 14px !important;
      color: #333 !important;
    }

    /* Hide the "Powered by Google" text */
    .goog-logo-link {
      display: none !important;
    }

    .goog-te-gadget {
      font-size: 0 !important;
    }

    .goog-te-gadget .goog-te-combo {
      margin: 0 !important;
    }
  `}</style>
);

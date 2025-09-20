"use client";

import { useEffect, useState } from "react";
import { Globe, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/ui/motion";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

interface GoogleTranslateProps {
  className?: string;
}

export function GoogleTranslate({ className = "" }: GoogleTranslateProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load Google Translate script
    const loadGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        setIsLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Translate
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages:
                "en,fr,de,es,hi,ar,zh,ja,ko,pt,ru,it,tr,pl,nl,sv,da,no,fi,cs,hu,ro,bg,hr,sk,sl,et,lv,lt,mt,el,cy,ga,is,fo,lb,rm,gd,br,oc,co,sc,vec,lad,an,ast,gl,eu,ca,af,az,be,bs,cy,eo,fa,ga,he,is,ka,kk,ky,lo,lt,lv,mk,ms,my,ne,si,sk,sl,sq,sr,sw,ta,te,th,uk,ur,uz,vi,zu",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true,
            },
            "google_translate_element"
          );
          setIsLoaded(true);
        }
      };
    };

    loadGoogleTranslate();

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

  const toggleTranslate = () => {
    if (isLoaded) {
      const translateElement = document.getElementById(
        "google_translate_element"
      );
      if (translateElement) {
        const selectElement = translateElement.querySelector("select");
        if (selectElement) {
          selectElement.click();
        }
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        onClick={toggleTranslate}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral bg-white hover:bg-neutral-light transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 min-w-fit whitespace-nowrap"
        disabled={!isLoaded}
      >
        <Globe size={16} className="text-blue-600" />
        <span className="text-sm font-medium text-black">
          {isLoaded ? "Translate" : "Loading..."}
        </span>
        <Languages size={16} className="text-blue-600" />
      </Button>

      {/* Google Translate Element */}
      <div
        id="google_translate_element"
        className="absolute top-full left-0 mt-2 z-50"
        style={{ display: isOpen ? "block" : "none" }}
      />

      {/* Custom styling for Google Translate dropdown */}
      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }

        .goog-te-menu-value {
          color: #000 !important;
        }

        .goog-te-menu2 {
          background: white !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 0.5rem !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
          max-height: 300px !important;
          overflow-y: auto !important;
        }

        .goog-te-menu2-item {
          padding: 8px 12px !important;
          color: #000 !important;
          font-size: 14px !important;
        }

        .goog-te-menu2-item:hover {
          background-color: #f3f4f6 !important;
        }

        .goog-te-menu2-item-selected {
          background-color: #dbeafe !important;
          color: #1d4ed8 !important;
        }

        .goog-te-menu2-item div {
          color: #000 !important;
        }

        .goog-te-menu2-item-selected div {
          color: #1d4ed8 !important;
        }

        .goog-te-gadget {
          font-family: inherit !important;
        }

        .goog-te-gadget-simple {
          background: transparent !important;
          border: none !important;
          font-size: 14px !important;
          color: #000 !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value span:first-child {
          color: #000 !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value span:last-child {
          color: #6b7280 !important;
        }

        /* Hide the Google Translate banner */
        .skiptranslate {
          display: none !important;
        }

        /* Style the body when translated */
        body.translated-ltr {
          font-family: inherit !important;
        }

        /* Custom styles for translated content */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }

        /* Ensure proper spacing */
        .goog-te-gadget {
          margin: 0 !important;
        }
      `}</style>
    </div>
  );
}

// Hook for detecting language changes
export function useGoogleTranslate() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const checkLanguage = () => {
      const body = document.body;
      if (body.classList.contains("translated-ltr")) {
        // Try to detect the current language from Google Translate
        const translateElement = document.querySelector(
          ".goog-te-gadget-simple .goog-te-menu-value span:first-child"
        );
        if (translateElement) {
          const langText = translateElement.textContent || "";
          // Extract language code from the text
          const langMap: { [key: string]: string } = {
            English: "en",
            Français: "fr",
            Deutsch: "de",
            Español: "es",
            हिन्दी: "hi",
            العربية: "ar",
            中文: "zh",
            日本語: "ja",
            한국어: "ko",
            Português: "pt",
            Русский: "ru",
            Italiano: "it",
            Türkçe: "tr",
            Polski: "pl",
            Nederlands: "nl",
            Svenska: "sv",
            Dansk: "da",
            Norsk: "no",
            Suomi: "fi",
            Čeština: "cs",
            Magyar: "hu",
            Română: "ro",
            Български: "bg",
            Hrvatski: "hr",
            Slovenčina: "sk",
            Slovenščina: "sl",
            Eesti: "et",
            Latviešu: "lv",
            Lietuvių: "lt",
            Malti: "mt",
            Ελληνικά: "el",
            Cymraeg: "cy",
            Gaeilge: "ga",
            Íslenska: "is",
            Føroyskt: "fo",
            Lëtzebuergesch: "lb",
            Rumantsch: "rm",
            Gàidhlig: "gd",
            Brezhoneg: "br",
            Occitan: "oc",
            Corsu: "co",
            Sardu: "sc",
            Vèneto: "vec",
            Ladino: "lad",
            Aragonés: "an",
            Asturianu: "ast",
            Galego: "gl",
            Euskera: "eu",
            Català: "ca",
            Afrikaans: "af",
            Azərbaycan: "az",
            Беларуская: "be",
            Bosanski: "bs",
            Esperanto: "eo",
            فارسی: "fa",
            עברית: "he",
            ქართული: "ka",
            Қазақ: "kk",
            Кыргызча: "ky",
            ລາວ: "lo",
            Македонски: "mk",
            "Bahasa Melayu": "ms",
            မြန်မာ: "my",
            नेपाली: "ne",
            සිංහල: "si",
            Shqip: "sq",
            Српски: "sr",
            Kiswahili: "sw",
            தமிழ்: "ta",
            తెలుగు: "te",
            ไทย: "th",
            Українська: "uk",
            اردو: "ur",
            "O'zbek": "uz",
            "Tiếng Việt": "vi",
            IsiZulu: "zu",
          };

          const detectedLang = langMap[langText] || "en";
          setCurrentLanguage(detectedLang);
        }
      } else {
        setCurrentLanguage("en");
      }
    };

    // Check language on load
    checkLanguage();

    // Set up observer to watch for changes
    const observer = new MutationObserver(checkLanguage);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return { currentLanguage };
}

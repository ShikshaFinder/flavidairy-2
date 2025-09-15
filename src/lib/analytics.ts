// Analytics implementation
import { APP_CONFIG, ENV } from "@/config/constants";

// Google Analytics 4 implementation
export const initGA = () => {
  if (!ENV.NEXT_PUBLIC_GA_ID || !APP_CONFIG.FEATURES.ANALYTICS) {
    return;
  }

  // Load Google Analytics script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ENV.NEXT_PUBLIC_GA_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", ENV.NEXT_PUBLIC_GA_ID, {
    anonymize_ip: true,
    cookie_flags: "secure;samesite=strict",
  });
};

// Track page views
export const trackPageView = (url: string) => {
  if (!APP_CONFIG.FEATURES.ANALYTICS || !window.gtag) {
    return;
  }

  window.gtag("config", ENV.NEXT_PUBLIC_GA_ID, {
    page_path: url,
  });
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!APP_CONFIG.FEATURES.ANALYTICS || !window.gtag) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track conversions
export const trackConversion = (
  conversionId: string,
  value?: number,
  currency = "USD"
) => {
  if (!APP_CONFIG.FEATURES.ANALYTICS || !window.gtag) {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: conversionId,
    value: value,
    currency: currency,
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (location: string) => {
  trackEvent("click", "contact", `whatsapp_${location}`);
};

// Track language switches
export const trackLanguageSwitch = (fromLang: string, toLang: string) => {
  trackEvent("language_switch", "navigation", `${fromLang}_to_${toLang}`);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", "engagement", formName);
};

// Track downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent("file_download", "engagement", `${fileName}_${fileType}`);
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}


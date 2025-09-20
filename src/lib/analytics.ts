// Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export function initGA() {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_ID) {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID);
  }
}

// Track page views
export function trackPageView(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
}

// Track events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Track WhatsApp clicks
export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", "engagement", source);
}

// Track language switches
export function trackLanguageSwitch(fromLang: string, toLang: string) {
  trackEvent("language_switch", "user_interaction", `${fromLang}_to_${toLang}`);
}

// Track form submissions
export function trackFormSubmission(formName: string) {
  trackEvent("form_submit", "engagement", formName);
}

// Track button clicks
export function trackButtonClick(buttonName: string, location: string) {
  trackEvent("button_click", "engagement", `${buttonName}_${location}`);
}

// Track external link clicks
export function trackExternalLink(url: string, source: string) {
  trackEvent("external_link_click", "navigation", `${source}_${url}`);
}

// Track scroll depth
export function trackScrollDepth(depth: number) {
  trackEvent("scroll_depth", "engagement", `${depth}%`);
}

// Track time on page
export function trackTimeOnPage(timeInSeconds: number) {
  trackEvent("time_on_page", "engagement", `${timeInSeconds}s`);
}

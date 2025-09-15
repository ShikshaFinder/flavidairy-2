// Application Configuration Constants
export const APP_CONFIG = {
  // Company Information
  COMPANY: {
    NAME: "Euronova Food Solutions",
    FULL_NAME: "Euronova Food Solutions",
    TAGLINE: "Leading provider of dairy and food processing solutions",
    EXPERIENCE: "20+ Years of Experience",
    PROJECTS: "1600+ Projects Commissioned",
  },

  // Contact Information
  CONTACT: {
    WHATSAPP: {
      NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919979132679",
      MESSAGE:
        "Hi, I'm interested in your services and would like to get in touch. Please provide more information about your offerings.",
    },
    PHONE: "+91 99791 32679",
    EMAIL: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "md@euronovas.com",
  },

  // Website URLs
  URLS: {
    BASE: process.env.NEXT_PUBLIC_BASE_URL || "https://euronovas.com",
    SOCIAL: {
      FACEBOOK:
        process.env.NEXT_PUBLIC_FACEBOOK_URL ||
        "https://facebook.com/euronovas",
      TWITTER:
        process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/euronovas",
      LINKEDIN:
        process.env.NEXT_PUBLIC_LINKEDIN_URL ||
        "https://linkedin.com/company/euronovas",
      INSTAGRAM:
        process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
        "https://instagram.com/euronovas",
    },
  },

  // SEO Configuration
  SEO: {
    DEFAULT_TITLE:
      "Euronova Food Solutions - Dairy & Food Processing Equipment",
    DEFAULT_DESCRIPTION:
      "Leading provider of dairy and food processing solutions with 20+ years of experience. Turnkey projects, automation, and consultancy services.",
    KEYWORDS: [
      "dairy processing",
      "food processing",
      "processing equipment",
      "automation",
      "consultancy",
      "turnkey projects",
      "SCADA integration",
      "dairy machinery",
      "food machinery",
      "industrial automation",
    ],
    OPEN_GRAPH: {
      IMAGE: "/og-image.jpg",
      IMAGE_WIDTH: 1200,
      IMAGE_HEIGHT: 630,
      TYPE: "website",
    },
  },

  // Animation Configuration
  ANIMATION: {
    DURATION: {
      FAST: 0.2,
      NORMAL: 0.3,
      SLOW: 0.6,
    },
    EASING: {
      EASE_IN_OUT: "easeInOut",
      EASE_OUT: "easeOut",
      EASE_IN: "easeIn",
    },
  },

  // Feature Flags
  FEATURES: {
    ANALYTICS: process.env.NODE_ENV === "production",
    ERROR_REPORTING: process.env.NODE_ENV === "production",
    DEBUG_MODE: process.env.NODE_ENV === "development",
  },
} as const;

// Environment Variables
export const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || "",
  NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN || "",
} as const;

// Validation
export function validateConfig() {
  const requiredEnvVars: string[] = [
    // Add any required environment variables here
  ];

  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    console.warn("Missing environment variables:", missingVars);
  }

  return missingVars.length === 0;
}

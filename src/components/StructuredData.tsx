"use client";

import { APP_CONFIG } from "@/config/constants";

interface StructuredDataProps {
  type?: "organization" | "website" | "breadcrumb";
  locale?: string;
}

export function StructuredData({
  type = "organization",
  locale = "en",
}: StructuredDataProps) {
  const getOrganizationData = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: APP_CONFIG.COMPANY.NAME,
    alternateName: APP_CONFIG.COMPANY.FULL_NAME,
    description: APP_CONFIG.COMPANY.TAGLINE,
    url: APP_CONFIG.URLS.BASE,
    logo: `${APP_CONFIG.URLS.BASE}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${APP_CONFIG.CONTACT.WHATSAPP.NUMBER}`,
      contactType: "customer service",
      availableLanguage: ["en", "fr", "de", "es"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      APP_CONFIG.URLS.SOCIAL.FACEBOOK,
      APP_CONFIG.URLS.SOCIAL.TWITTER,
      APP_CONFIG.URLS.SOCIAL.LINKEDIN,
      APP_CONFIG.URLS.SOCIAL.INSTAGRAM,
    ],
    foundingDate: "2004",
    numberOfEmployees: "50-100",
    industry: "Food Processing Equipment",
  });

  const getWebsiteData = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: APP_CONFIG.COMPANY.NAME,
    url: APP_CONFIG.URLS.BASE,
    description: APP_CONFIG.COMPANY.TAGLINE,
    inLanguage: ["en", "fr", "de", "es"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${APP_CONFIG.URLS.BASE}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  });

  const getBreadcrumbData = () => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: APP_CONFIG.URLS.BASE,
      },
    ],
  });

  const getData = () => {
    switch (type) {
      case "organization":
        return getOrganizationData();
      case "website":
        return getWebsiteData();
      case "breadcrumb":
        return getBreadcrumbData();
      default:
        return getOrganizationData();
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getData(), null, 2),
      }}
    />
  );
}

import { APP_CONFIG } from "@/config/constants";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: APP_CONFIG.COMPANY.NAME,
    description: APP_CONFIG.SEO.DEFAULT_DESCRIPTION,
    url: APP_CONFIG.URLS.BASE,
    logo: `${APP_CONFIG.URLS.BASE}/favicon.ico`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: APP_CONFIG.CONTACT.PHONE,
      contactType: "customer service",
      availableLanguage: ["English", "French", "German", "Spanish"],
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
    numberOfEmployees: "20+",
    industry: "Dairy and Food Processing Equipment",
    keywords: APP_CONFIG.SEO.KEYWORDS.join(", "),
    offers: {
      "@type": "Offer",
      description:
        "Dairy and food processing equipment, consultancy services, and turnkey project solutions",
      category: "Industrial Equipment",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

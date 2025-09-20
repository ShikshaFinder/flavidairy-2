import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { PageTransitionWrapper } from "@/components/PageTransitionWrapper";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { StructuredData } from "@/components/StructuredData";
import { APP_CONFIG } from "@/config/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: APP_CONFIG.SEO.DEFAULT_TITLE,
    template: `%s | ${APP_CONFIG.COMPANY.NAME}`,
  },
  description: APP_CONFIG.SEO.DEFAULT_DESCRIPTION,
  keywords: APP_CONFIG.SEO.KEYWORDS,
  authors: [{ name: APP_CONFIG.COMPANY.NAME }],
  creator: APP_CONFIG.COMPANY.NAME,
  publisher: APP_CONFIG.COMPANY.NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(APP_CONFIG.URLS.BASE),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "fr-FR": "/fr",
      "de-DE": "/de",
      "es-ES": "/es",
    },
  },
  openGraph: {
    type: APP_CONFIG.SEO.OPEN_GRAPH.TYPE,
    locale: "en_US",
    url: APP_CONFIG.URLS.BASE,
    title: APP_CONFIG.SEO.DEFAULT_TITLE,
    description: APP_CONFIG.SEO.DEFAULT_DESCRIPTION,
    siteName: APP_CONFIG.COMPANY.NAME,
    images: [
      {
        url: APP_CONFIG.SEO.OPEN_GRAPH.IMAGE,
        width: APP_CONFIG.SEO.OPEN_GRAPH.IMAGE_WIDTH,
        height: APP_CONFIG.SEO.OPEN_GRAPH.IMAGE_HEIGHT,
        alt: APP_CONFIG.SEO.DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_CONFIG.SEO.DEFAULT_TITLE,
    description: APP_CONFIG.SEO.DEFAULT_DESCRIPTION,
    images: [APP_CONFIG.SEO.OPEN_GRAPH.IMAGE],
    creator: "@euronovas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://translate.google.com" />
        <link rel="preconnect" href="https://translate.googleapis.com" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Structured Data */}
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary>
          <PageTransitionWrapper>
            {children}
            <CookieConsent />
          </PageTransitionWrapper>
        </ErrorBoundary>
      </body>
    </html>
  );
}

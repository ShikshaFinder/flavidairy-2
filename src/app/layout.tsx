import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { PageTransitionWrapper } from "@/components/PageTransitionWrapper";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { StructuredData } from "@/components/StructuredData";
import { APP_CONFIG } from "@/config/constants";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Flavi Dairy Food Solutions - Premium Dairy Equipment & Consultancy",
  description:
    "Leading provider of dairy processing equipment, consultancy services, and innovative solutions for the dairy industry worldwide.",
  authors: [{ name: "Flavi Dairy Food Solutions Team" }],
  creator: "Flavi Dairy Food Solutions",
  publisher: "Flavi Dairy Food Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(APP_CONFIG.URLS.BASE),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Flavi Dairy Food Solutions - Premium Dairy Equipment & Consultancy",
    description:
      "Leading provider of dairy processing equipment, consultancy services, and innovative solutions for the dairy industry worldwide.",
    url: APP_CONFIG.URLS.BASE,
    siteName: "Flavi Dairy Food Solutions",
    images: [
      {
        url: APP_CONFIG.SEO.OPEN_GRAPH.IMAGE,
        width: APP_CONFIG.SEO.OPEN_GRAPH.IMAGE_WIDTH,
        height: APP_CONFIG.SEO.OPEN_GRAPH.IMAGE_HEIGHT,
        alt: "Flavi Dairy Food Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavi Dairy Food Solutions - Premium Dairy Equipment & Consultancy",
    description:
      "Leading provider of dairy processing equipment, consultancy services, and innovative solutions for the dairy industry worldwide.",
    images: [APP_CONFIG.SEO.OPEN_GRAPH.IMAGE],
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
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="organization" locale="en" />
        <StructuredData type="website" locale="en" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
          <CookieConsent />
        </ErrorBoundary>
      </body>
    </html>
  );
}

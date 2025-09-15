import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { Inter } from "next/font/google";
import "../globals.css";
import { AlternateLocales } from "@/components/AlternateLocales";
import { CookieConsent } from "@/components/CookieConsent";
import { PageTransitionWrapper } from "@/components/PageTransitionWrapper";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { StructuredData } from "@/components/StructuredData";
import { APP_CONFIG } from "@/config/constants";

const inter = Inter({ subsets: ["latin"] });

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("hero.title"),
    description: t("hero.description"),
    keywords: APP_CONFIG.SEO.KEYWORDS,
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
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        de: "/de",
        es: "/es",
        "x-default": "/en",
      },
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
      title: t("hero.title"),
      description: t("hero.description"),
      url: `${APP_CONFIG.URLS.BASE}/${locale}`,
      siteName: t("footer.company"),
      images: [
        {
          url: APP_CONFIG.SEO.OPEN_GRAPH.IMAGE,
          width: APP_CONFIG.SEO.OPEN_GRAPH.IMAGE_WIDTH,
          height: APP_CONFIG.SEO.OPEN_GRAPH.IMAGE_HEIGHT,
          alt: t("hero.title"),
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("hero.title"),
      description: t("hero.description"),
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
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <AlternateLocales />
        <StructuredData type="organization" locale={locale} />
        <StructuredData type="website" locale={locale} />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <NextIntlClientProvider messages={messages}>
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
            <CookieConsent />
          </NextIntlClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}

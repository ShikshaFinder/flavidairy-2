import type { Metadata } from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/i18n';
import { Inter } from 'next/font/google';
import '../globals.css';
import { AlternateLocales } from '@/components/AlternateLocales';
import { CookieConsent } from '@/components/CookieConsent';
import { PageTransitionWrapper } from '@/components/PageTransitionWrapper';

const inter = Inter({ subsets: ['latin'] });

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {locale: string};
}

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const t = await getTranslations({locale});
  
  return {
    title: t('hero.title'),
    description: t('hero.description'),
    keywords: [
      'dairy processing',
      'food processing', 
      'processing equipment',
      'automation',
      'consultancy',
      'turnkey projects',
      'SCADA integration',
    ],
    authors: [{ name: 'Flavi Dairy Food Solutions Team' }],
    creator: 'Flavi Dairy Food Solutions',
    publisher: 'Flavi Dairy Food Solutions',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://flavidairysolution.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'fr': '/fr',
        'de': '/de', 
        'es': '/es',
        'x-default': '/en',
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
        { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [{ url: '/logo.png', sizes: '180x180', type: 'image/png' }],
    },
    openGraph: {
      title: t('hero.title'),
      description: t('hero.description'),
      url: `https://flavidairysolution.com/${locale}`,
      siteName: t('footer.company'),
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: t('hero.title'),
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('hero.title'),
      description: t('hero.description'),
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
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
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

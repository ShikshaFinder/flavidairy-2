import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flavi Dairy Food Solutions - Dairy & Food Processing Equipment",
  description:
    "Leading provider of dairy and food processing solutions with 20+ years of experience. Turnkey projects, automation, and consultancy services.",
  keywords: [
    "dairy processing",
    "food processing",
    "processing equipment",
    "automation",
    "consultancy",
    "turnkey projects",
    "SCADA integration",
  ],
  authors: [{ name: "Flavi Dairy Food Solutions Team" }],
  creator: "Flavi Dairy Food Solutions",
  publisher: "Flavi Dairy Food Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://flavidairysolution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Flavi Dairy Food Solutions - Dairy & Food Processing Equipment",
    description:
      "Leading provider of dairy and food processing solutions with 20+ years of experience. Turnkey projects, automation, and consultancy services.",
    url: "https://flavidairysolution.com",
    siteName: "Flavi Dairy Food Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flavi Dairy Food Solutions - Dairy & Food Processing Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavi Dairy Food Solutions - Dairy & Food Processing Equipment",
    description:
      "Leading provider of dairy and food processing solutions with 20+ years of experience. Turnkey projects, automation, and consultancy services.",
    images: ["/og-image.jpg"],
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

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

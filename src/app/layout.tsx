import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { churchJsonLd, SITE_URL } from "@/lib/seo";
import { siteConfig } from "@/lib/content";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.displayName} | ${siteConfig.mission}`,
    template: `%s | ${siteConfig.displayName}`,
  },
  description:
    "Deliverance Church Int'l - Utawala (DC Utawala) is an apostolic church on Utawala Road, Utawala, Nairobi, Kenya, equipping mankind for the mission of God. Join us for Sunday services at 6:30 AM and 9:30 AM.",
  keywords: [
    "Deliverance Church Utawala",
    "DC Utawala",
    "Deliverance Church Utawala Nairobi",
    "Church in Utawala",
    "Churches in Utawala Nairobi",
  ],
  openGraph: {
    siteName: siteConfig.displayName,
    type: "website",
    locale: "en_KE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#201309",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd()) }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "./content";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dcutawala.org";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

export function pageMetadata({ title, description, path, type = "website" }: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.displayName,
      type,
      images: [{ url: `${SITE_URL}/logo-512.png`, width: 512, height: 512, alt: siteConfig.displayName }],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export function churchJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Church",
    name: siteConfig.churchName,
    alternateName: [siteConfig.displayName, siteConfig.shortName],
    slogan: siteConfig.tagline,
    description: siteConfig.missionSupport,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-512.png`,
    image: `${SITE_URL}/logo-512.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Utawala",
      addressRegion: "Nairobi",
      addressCountry: "KE",
    },
    founder: { "@type": "Person", name: siteConfig.leadPastors },
    openingHours: [
      "Su 06:30-09:00",
      "Su 09:30-12:00",
      "Tu 18:30",
      "We 18:30-20:00",
      "Fr 18:30-20:00",
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

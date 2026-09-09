import { externalLinks, siteConfig } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { LocationCard } from "@/components/Cards";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Deliverance Church Utawala — Utawala Road, Utawala, Nairobi, Kenya. Call +254 723 102 273 or email info@dcutawala.org.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect With Us"
        lede="Questions, prayer or pastoral care — the church office is happy to help."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]}
      />

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionHeading eyebrow="Send a message" title="Write to us" />
              <ContactForm />
            </div>
            <div style={{ display: "grid", gap: "1.25rem" }}>
              <LocationCard />
              <div className="hero-actions">
                <a className="btn btn--gold" href={`tel:${siteConfig.phoneHref}`}>
                  Call Us
                </a>
                <a className="btn btn--outline" href={`mailto:${siteConfig.email}`}>
                  Email Us
                </a>
                <a
                  className="btn btn--outline"
                  href={externalLinks.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </div>
              <p className="prose">
                <strong>Lead Pastors:</strong> {siteConfig.leadPastors}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionHeading eyebrow="Map" title="Utawala Road, Nairobi" />
          <MapEmbed />
        </div>
      </section>
    </>
  );
}

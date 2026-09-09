import { notFound } from "next/navigation";
import { ministries, TBC } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageGallery } from "@/components/ImageGallery";
import { CTASection } from "@/components/CTASection";

interface MinistryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ministries.map((ministry) => ({ slug: ministry.slug }));
}

export function generateMetadata({ params }: MinistryPageProps) {
  return params.then(({ slug }) => {
    const ministry = ministries.find((item) => item.slug === slug);
    if (!ministry) return {};
    return pageMetadata({
      title: `${ministry.name} — ${ministry.subtitle}`,
      description: `${ministry.name} (${ministry.subtitle}) at Deliverance Church Utawala. ${ministry.summary}`,
      path: `/ministries/${slug}`,
    });
  });
}

export default async function MinistryPage({ params }: MinistryPageProps) {
  const { slug } = await params;
  const ministry = ministries.find((item) => item.slug === slug);
  if (!ministry) notFound();

  const details = [
    { label: "Purpose", value: ministry.purpose },
    { label: "Who it serves", value: ministry.serves ?? ministry.ageGroup },
    { label: "Leadership", value: ministry.leadership },
    { label: "Meeting schedule", value: ministry.schedule },
  ];

  return (
    <>
      <PageHero
        eyebrow={ministry.subtitle}
        title={ministry.name}
        lede={ministry.summary}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Ministries", path: "/ministries" },
          { name: ministry.name, path: `/ministries/${ministry.slug}` },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="two-col two-col--aside">
            <div>
              <SectionHeading eyebrow="About" title={`About ${ministry.name}`} />
              <div className="prose">
                <p>{ministry.summary}</p>
                {ministry.ageGroup && (
                  <p>
                    <strong>Age structure:</strong> {ministry.ageGroup}
                  </p>
                )}
              </div>

              <div style={{ marginTop: "2.5rem", display: "grid", gap: "1.25rem" }}>
                {details.map((detail) => (
                  <div key={detail.label}>
                    <h3 className="footer-heading" style={{ color: "var(--gold-deep)" }}>
                      {detail.label}
                    </h3>
                    <p className="prose">
                      {detail.value ?? <span className="tbc-note">{TBC}</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gap: "1.5rem" }}>
              <div>
                <h3 className="footer-heading" style={{ color: "var(--gold-deep)" }}>
                  Activities
                </h3>
                {ministry.activities ? (
                  <ul className="footer-list" style={{ color: "var(--muted)" }}>
                    {ministry.activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="tbc-note">{TBC}</p>
                )}
              </div>
              <div>
                <h3 className="footer-heading" style={{ color: "var(--gold-deep)" }}>
                  Gallery
                </h3>
                <ImageGallery images={ministry.gallery ?? []} />
                {(ministry.gallery?.length ?? 0) === 0 && (
                  <p className="tbc-note">Photography {TBC}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Join"
        title={`Join ${ministry.name}`}
        lede="Get in touch with the church office to connect with this ministry."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "All Ministries", href: "/ministries", variant: "light" },
        ]}
      />
    </>
  );
}

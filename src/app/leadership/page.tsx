import { leaders, TBC } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { LeaderCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";

export const metadata = pageMetadata({
  title: "Pastoral Leadership",
  description:
    "Meet the pastoral leadership of Deliverance Church Utawala, led by Rev. Emmanuel & Lucy Kokonyo.",
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Pastoral Leadership"
        lede="The shepherds God has placed over Deliverance Church Utawala."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Leadership", path: "/leadership" },
        ]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Confirmed Leadership" title="Our pastors" wide />
          <div className="card-grid card-grid--3">
            {leaders.map((leader) => (
              <LeaderCard key={leader.slug} leader={leader} />
            ))}
          </div>
          <p className="tbc-note" style={{ marginTop: "2rem" }}>
            Additional pastoral leaders — {TBC}
          </p>
        </div>
      </section>
      <CTASection
        eyebrow="Shepherding"
        title="Need pastoral care?"
        lede="Our pastoral team is available for counselling, prayer and guidance."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Prayer Request", href: "/prayer-request", variant: "light" },
        ]}
      />
    </>
  );
}

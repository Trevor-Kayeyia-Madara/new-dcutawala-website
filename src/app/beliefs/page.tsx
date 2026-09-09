import { TBC } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = pageMetadata({
  title: "Our Beliefs",
  description:
    "What Deliverance Church Utawala believes — the doctrine and convictions that shape our worship, teaching and service.",
  path: "/beliefs",
});

export default function BeliefsPage() {
  return (
    <>
      <PageHero
        eyebrow="Doctrine"
        title="Our Beliefs"
        lede="The convictions that shape how we worship, teach and serve at Deliverance Church Utawala."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Beliefs", path: "/beliefs" },
        ]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Statement of Faith"
            title="What we hold to"
          />
          <div className="prose">
            <p>
              As an apostolic church, our faith is rooted in the Scriptures and
              expressed in worship, discipleship and mission. Our full
              statement of doctrine is being prepared for publication.
            </p>
            <p className="tbc-note">{TBC}</p>
          </div>
        </div>
      </section>
    </>
  );
}

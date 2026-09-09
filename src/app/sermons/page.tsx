import { sermons } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SermonExplorer } from "@/components/SermonExplorer";

export const metadata = pageMetadata({
  title: "Sermons",
  description:
    "Watch and listen to sermons from Deliverance Church Utawala — messages from our Sunday and midweek services.",
  path: "/sermons",
});

export default function SermonsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Word"
        title="Grow Through The Word"
        lede="Messages from our services — filter by speaker, series or topic."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Sermons", path: "/sermons" },
        ]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Sermon Library" title="Recent messages" wide />
          <SermonExplorer sermons={sermons} />
        </div>
      </section>
    </>
  );
}

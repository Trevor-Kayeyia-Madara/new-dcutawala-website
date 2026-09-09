import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TBC } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Resources",
  description:
    "Sermons, teachings, articles, Bible study and media from Deliverance Church Utawala — resources to help you grow in the Word.",
  path: "/resources",
});

const resourceAreas = [
  {
    name: "Sermons",
    href: "/sermons",
    body: "Messages from our Sunday and midweek services.",
  },
  {
    name: "Teachings",
    href: "/sermons",
    body: "Deep-dive teaching series for spiritual growth.",
  },
  {
    name: "Articles",
    href: "/articles",
    body: "Written reflections and resources from our leaders.",
  },
  {
    name: "Bible Study",
    href: "",
    body: "Guides and outlines for personal and group study.",
  },
  {
    name: "Media",
    href: "",
    body: "Photography, recordings and church media.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Grow"
        title="Resources"
        lede="Everything we publish to help you grow through the Word — sermons, teachings, articles, Bible study and media."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Library" title="Browse by area" wide />
          <div className="card-grid card-grid--3">
            {resourceAreas.map((area) =>
              area.href ? (
                <Link className="card" href={area.href} key={area.name}>
                  <h3 className="card__title">{area.name}</h3>
                  <p className="card__body">{area.body}</p>
                </Link>
              ) : (
                <div className="card" key={area.name}>
                  <h3 className="card__title">{area.name}</h3>
                  <p className="card__body">{area.body}</p>
                  <p className="tbc-note">{TBC}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

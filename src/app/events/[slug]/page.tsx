import { notFound } from "next/navigation";
import { events } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: EventPageProps) {
  return params.then(({ slug }) => {
    const event = events.find((item) => item.slug === slug);
    if (!event) return {};
    return pageMetadata({
      title: event.title,
      description: `${event.title} — ${event.date}, ${event.time} at ${event.location}.`,
      path: `/events/${slug}`,
    });
  });
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();

  return (
    <>
      <PageHero
        eyebrow={event.date}
        title={event.title}
        lede={`${event.time} · ${event.location}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: event.title, path: `/events/${event.slug}` },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="prose">
            <p>{event.description}</p>
            {event.registration && <p><strong>Registration:</strong> {event.registration}</p>}
            {event.contact && <p><strong>Contact:</strong> {event.contact}</p>}
          </div>
        </div>
      </section>
    </>
  );
}

import { events } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/Cards";
import { EmptyState } from "@/components/EmptyState";

export const metadata = pageMetadata({
  title: "Events",
  description:
    "Upcoming events, conferences and special services at Deliverance Church Utawala.",
  path: "/events",
});

export default function EventsPage() {
  const upcoming = events.filter((event) => event.status !== "past");

  return (
    <>
      <PageHero
        eyebrow="Calendar"
        title="Events"
        lede="Conferences, special services and community gatherings at DC Utawala."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
        ]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What's on" title="Upcoming events" wide />
          {upcoming.length > 0 ? (
            <div className="card-grid card-grid--3">
              {upcoming.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No upcoming events are currently published."
              body="When events are scheduled they will appear here with dates, times and registration details."
            />
          )}
        </div>
      </section>
    </>
  );
}

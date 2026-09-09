import { externalLinks, services, siteConfig } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceSchedule } from "@/components/ServiceSchedule";
import { MapEmbed } from "@/components/MapEmbed";

export const metadata = pageMetadata({
  title: "Plan Your Visit",
  description:
    "Planning your first visit to Deliverance Church Utawala? Find our location on Utawala Road, Nairobi, Sunday service times and everything you need for your first visit.",
  path: "/plan-your-visit",
});

const visitorInfo = [
  {
    label: "What to expect",
    value:
      "Expect a warm, orderly and lively gathering: heartfelt worship, prayer and practical teaching of the Word. Ushers from our Protocol team meet you at the door, help you find a seat and answer any questions. Come as you are — first-time visitors are welcomed during the service, and you are never under any obligation to give or to come forward.",
  },
  {
    label: "Parking",
    value:
      "Parking is available at the church on Utawala Road, and ushers will guide you to a space on Sunday mornings. Arriving 15–20 minutes before the service begins (6:30 AM or 9:30 AM) gives you relaxed parking and time to settle in before worship starts.",
  },
  {
    label: "Children",
    value:
      "Children are fully welcome at Deliverance Church Utawala. Our Sunday School ministry serves children and young adults — “Young Adults” is our term for the 13–22 group — with age-appropriate teaching and care, and parents with babies are welcome to stay with them in the auditorium at any time. Ask any usher and they will connect you with the Sunday School team.",
  },
  {
    label: "Accessibility",
    value: `We want every worshipper to feel at home with us. If you use a wheelchair or have limited mobility, or live with a hearing or visual impairment, please call the church office on ${siteConfig.phone} before your visit and our team will arrange seating and assistance for you. On the day, any usher or Protocol team member will gladly walk with you and help you settle in.`,
  },
];

export default function PlanYourVisitPage() {
  const sundayServices = services.filter((service) => service.day === "Sunday");

  return (
    <>
      <PageHero
        eyebrow="Plan Your Visit"
        title="We'd love to welcome you"
        lede={`${siteConfig.displayName} · ${siteConfig.address.line1}, ${siteConfig.address.line2}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Plan Your Visit", path: "/plan-your-visit" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionHeading eyebrow="Location" title="Finding us" />
              <div className="prose">
                <p>
                  <strong>{siteConfig.displayName}</strong>
                  <br />
                  {siteConfig.address.line1},
                  <br />
                  {siteConfig.address.line2}
                </p>
                <p>
                  <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
                  <br />
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
                <p>
                  <a
                    className="btn btn--gold"
                    href={externalLinks.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </p>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Sunday Services" title="When we meet" />
              <ServiceSchedule services={sundayServices} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionHeading eyebrow="Before you come" title="Good to know" wide />
          <div className="card-grid card-grid--3">
            {visitorInfo.map((item) => (
              <div className="card" key={item.label}>
                <h3 className="card__title" style={{ fontSize: "1.15rem" }}>
                  {item.label}
                </h3>
                <p className="card__body">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Map" title="Utawala Road, Nairobi" />
          <MapEmbed />
        </div>
      </section>
    </>
  );
}

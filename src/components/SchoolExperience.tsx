import { photos, school, siteConfig, TBC } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Photo } from "@/components/Photo";
import { CTASection } from "@/components/CTASection";

const schoolSections = [
  { label: "About", value: school.about },
  { label: "Vision", value: school.vision },
  { label: "Mission", value: school.mission },
  { label: "Programs", value: school.programs?.join(", ") },
  { label: "Admissions", value: school.admissions },
  { label: "Leadership", value: school.leadership },
  { label: "Facilities", value: school.facilities?.join(", ") },
];

export function SchoolExperience() {
  return (
    <>
      <PageHero
        eyebrow="School"
        title={school.name}
        lede={`The school arm of ${siteConfig.displayName}, extending our mission of equipping into education.`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "School", path: "/school" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="two-col">
            <Photo
              src={photos.school}
              alt={`${school.name} school`}
              mark="DC"
              fallbackLabel={`Brand artwork standing in for ${school.name} photography`}
              style={{ minHeight: "22rem" }}
            />
            <div>
              <SectionHeading eyebrow="Education" title={`About ${school.name}`} />
              <div className="prose">
                <p>
                  {school.name} is part of the work of {siteConfig.displayName}{" "}
                  on Utawala Road, Nairobi. Details of the school&apos;s
                  programs, admissions and leadership are being confirmed for
                  publication.
                </p>
                <p className="tbc-note">{TBC}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionHeading eyebrow="Information" title="School information" wide />
          <div className="card-grid card-grid--3">
            {schoolSections.map((item) => (
              <div className="card" key={item.label}>
                <h3 className="card__title" style={{ fontSize: "1.15rem" }}>
                  {item.label}
                </h3>
                <p className="card__body">{item.value ?? <span className="tbc-note">{TBC}</span>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Enquiries"
        title="Talk to us about the school"
        lede="For admissions and general enquiries, contact the church office."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Plan Your Visit", href: "/plan-your-visit", variant: "light" },
        ]}
      />
    </>
  );
}

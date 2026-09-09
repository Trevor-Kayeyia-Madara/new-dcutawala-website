import Link from "next/link";
import { leaders, pastorWelcome, photos, siteConfig } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { LeaderCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { Photo } from "@/components/Photo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Deliverance Church Utawala (DC Utawala) is an apostolic church on Utawala Road, Nairobi — equipping mankind for the mission of God. Learn our mission, vision, beliefs and story.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A church with a mission at its centre"
        lede={siteConfig.missionSupport}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
      />

      <section className="section section--cream">
        <div className="container">
          <div className="two-col two-col--aside">
            <div>
              <SectionHeading
                eyebrow="A Word From Our Senior Pastor"
                title="Welcome to our family"
              />
              <div className="prose">
                {pastorWelcome.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <div style={{ display: "grid", gap: "0.2rem", marginTop: "0.5rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.35rem",
                      color: "var(--chocolate)",
                    }}
                  >
                    {pastorWelcome.author}
                  </span>
                  <span className="card__subtitle">
                    {pastorWelcome.role} · {siteConfig.displayName}
                  </span>
                </div>
                {pastorWelcome.isSample && (
                  <p className="tbc-note">
                    Sample message — to be replaced with the Senior Pastor&apos;s
                    own words
                  </p>
                )}
              </div>
            </div>
            <Photo
              src={photos.leadPastor}
              alt="Rev. Emmanuel and Lucy Kokonyo, Lead Pastors"
              mark="DC"
              light
              fallbackLabel="Lead Pastors"
              style={{ minHeight: "24rem" }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionHeading eyebrow="Who We Are" title="Who We Are" />
              <div className="prose">
                <p>
                  Deliverance Church Int&apos;l - Utawala — known as{" "}
                  {siteConfig.shortName} — is an apostolic church located on{" "}
                  {siteConfig.address.line1}, {siteConfig.address.line2}.
                </p>
                <p>
                  We believe every believer is called to participate in
                  God&apos;s great commission. Our mission is to equip
                  individuals with the tools, knowledge, and spiritual
                  foundation needed to fulfill their calling in ministry and
                  daily life.
                </p>
                <p>
                  Through worship, teaching, ministries and service, we seek to
                  be {siteConfig.tagline.toLowerCase()} for families seeking
                  spiritual growth in Nairobi and beyond.
                </p>
              </div>
            </div>
            <Photo
              src={photos.congregation}
              alt="Church community at Deliverance Church Utawala"
              mark="DC"
              light
              fallbackLabel="Brand artwork standing in for church community photography"
              style={{ minHeight: "24rem" }}
            />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="statement-grid">
            <div className="statement">
              <span className="statement__label">Mission</span>
              <p className="statement__text">{siteConfig.mission}</p>
            </div>
            <div className="statement">
              <span className="statement__label">Vision</span>
              <p className="statement__text">{siteConfig.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionHeading eyebrow="Doctrine" title="Our Beliefs" />
              <div className="prose">
                <p>
                  Our doctrine shapes how we worship, serve and grow. The
                  full statement of beliefs is being published for our
                  congregation and visitors.
                </p>
                <p>
                  <Link className="link-arrow" href="/beliefs">
                    Read Our Beliefs
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="History" title="Our Story" />
              <div className="prose">
                <p className="tbc-note">[CONTENT TO BE CONFIRMED BY DC UTAWALA]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="Pastoral Leadership"
            lede="The shepherds God has placed over this house."
          />
          <div className="card-grid card-grid--3">
            {leaders.map((leader) => (
              <LeaderCard key={leader.slug} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next Step"
        title="Come and see for yourself"
        lede="Join us this week on Utawala Road — every service is open to everyone."
        actions={[
          { label: "Plan Your Visit", href: "/plan-your-visit" },
          { label: "View Services", href: "/services", variant: "light" },
        ]}
      />
    </>
  );
}

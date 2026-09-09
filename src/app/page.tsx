import Link from "next/link";
import {
  givingMethods,
  leaders,
  ministries,
  mpesaPaybill,
  services,
  siteConfig,
  TBC,
  worshipTeams,
  sermons,
  externalLinks,
  photos,
} from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceSchedule } from "@/components/ServiceSchedule";
import { Photo } from "@/components/Photo";
import { EmptyState } from "@/components/EmptyState";
import { CopyButton } from "@/components/CopyButton";
import {
  GivingCard,
  LeaderCard,
  MinistryCard,
  SermonCard,
  WorshipTeamCard,
} from "@/components/Cards";

const sundayServices = services.filter((service) => service.day === "Sunday");

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------ HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <span className="eyebrow rise">Deliverance Church Utawala</span>
            <h1 className="hero-title rise rise-1">
              Equipping mankind for the <em>mission of God.</em>
            </h1>
            <p className="hero-lede rise rise-2">
              An Apostolic church committed to transforming and empowering
              mankind in Africa and beyond.
            </p>
            <div className="hero-actions rise rise-3">
              <Link className="btn btn--gold" href="/plan-your-visit">
                Plan Your Visit
              </Link>
              <Link className="btn btn--light" href="/about">
                Discover Who We Are
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-strip">
          <div className="container">
            <dl className="hero-strip-inner">
              <div className="hero-fact">
                <dt>Location</dt>
                <dd>Utawala Road, Utawala, Nairobi</dd>
              </div>
              <div className="hero-fact">
                <dt>Sundays</dt>
                <dd>6:30 AM &amp; 9:30 AM</dd>
              </div>
              <div className="hero-fact">
                <dt>Lead Pastors</dt>
                <dd>Rev. Emmanuel &amp; Lucy Kokonyo</dd>
              </div>
              <div className="hero-fact">
                <dt>Identity</dt>
                <dd>{siteConfig.tagline}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ JOIN US */}
      <section className="section" aria-labelledby="join-us">
        <div className="container">
          <div className="two-col two-col--aside">
            <div>
              <SectionHeading
                eyebrow="Weekly Rhythm"
                title="Join Us"
                lede="Every week we gather to worship, learn and grow together. All services are open to everyone — come as you are."
              />
              <Link className="link-arrow" href="/services">
                View All Services
              </Link>
            </div>
            <ServiceSchedule services={services} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ WHO WE ARE */}
      <section className="section section--cream" aria-labelledby="who-we-are">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="A Church Built Around Mission"
              />
              <div className="prose">
                <p>{siteConfig.missionSupport}</p>
                <p>
                  On Utawala Road in Nairobi, we are a family of believers
                  learning to live out the great commission — in our homes, our
                  work and our city.
                </p>
              </div>
              <hr className="rule" />
              <p style={{ marginTop: "1.5rem" }}>
                <Link className="link-arrow" href="/about">
                  Learn More About Us
                </Link>
              </p>
            </div>
            <Photo
              src={photos.congregation}
              alt="Congregation at Deliverance Church Utawala"
              mark="DC"
              light
              fallbackLabel="Brand artwork standing in for congregation photography"
              style={{ minHeight: "22rem" }}
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ MISSION & VISION */}
      <section className="section section--dark" aria-labelledby="mission-vision">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="display-2">Mission &amp; Vision</h2>
          </div>
          <div className="statement-grid">
            <div className="statement">
              <span className="statement__label">Mission</span>
              <p className="statement__text">
                To equip mankind for the mission of God.
              </p>
              <p className="statement__support">{siteConfig.missionSupport}</p>
            </div>
            <div className="statement">
              <span className="statement__label">Vision</span>
              <p className="statement__text">
                The Apostolic Church of Choice transforming &amp; empowering
                mankind in Africa &amp; beyond.
              </p>
              <p className="statement__support">{siteConfig.visionSupport}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ MINISTRIES */}
      <section className="section" aria-labelledby="ministries">
        <div className="container">
          <SectionHeading
            eyebrow="Ministries"
            title="Find Your Place"
            lede="Discover opportunities to grow, serve, connect and participate in the life of the church."
            wide
          />
          <div className="card-grid card-grid--3">
            {ministries.map((ministry, index) => (
              <MinistryCard key={ministry.slug} ministry={ministry} index={index} />
            ))}
          </div>
          <p style={{ marginTop: "2.5rem" }}>
            <Link className="link-arrow" href="/ministries">
              Explore Ministries
            </Link>
          </p>
        </div>
      </section>

      {/* ------------------------------------------------ WORSHIP */}
      <section className="section section--dark" aria-labelledby="worship">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionHeading
                eyebrow="Worship Ministry"
                title="Worship Ministry"
                lede="Our choirs and band lead the congregation into the presence of God across every service."
              />
              <p>
                <Link className="link-arrow" href="/ministries#worship-ministry">
                  Explore Worship
                </Link>
              </p>
            </div>
            <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
              {worshipTeams.map((team) => (
                <WorshipTeamCard key={team.slug} team={team} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ LEADERSHIP */}
      <section className="section section--cream" aria-labelledby="leadership">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="Pastoral Leadership"
            lede="Shepherding the flock with wisdom, warmth and the Word."
          />
          <div className="card-grid card-grid--3">
            {leaders.map((leader) => (
              <LeaderCard key={leader.slug} leader={leader} />
            ))}
          </div>
          <p style={{ marginTop: "2.5rem" }}>
            <Link className="link-arrow" href="/leadership">
              Meet Our Leadership
            </Link>
          </p>
        </div>
      </section>

      {/* ------------------------------------------------ DOMINION CENTER */}
      <section className="section" aria-labelledby="dominion-center">
        <div className="container">
          <div className="two-col">
            <Photo
              src={photos.school}
              alt="Dominion Center school"
              mark="DC"
              fallbackLabel="Brand artwork standing in for Dominion Center photography"
              style={{ minHeight: "20rem" }}
            />
            <div>
              <SectionHeading eyebrow="School" title="Dominion Center" />
              <div className="prose">
                <p>
                  Dominion Center is the school arm of Deliverance Church
                  Utawala, extending our mission of equipping into education.
                </p>
                <p className="tbc-note">{TBC}</p>
              </div>
              <p style={{ marginTop: "1.5rem" }}>
                <Link className="link-arrow" href="/school">
                  Explore Dominion Center
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ SERMONS */}
      <section className="section section--sand" aria-labelledby="sermons">
        <div className="container">
          <SectionHeading
            eyebrow="Resources"
            title="Grow Through The Word"
            lede="Catch up on recent messages and teachings from our services."
          />
          {sermons.length > 0 ? (
            <div className="card-grid card-grid--3">
              {sermons.slice(0, 3).map((sermon) => (
                <SermonCard key={sermon.slug} sermon={sermon} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="New messages will appear here soon."
              body="Sermons from our services will be published here once available."
            />
          )}
          <p style={{ marginTop: "2.5rem" }}>
            <Link className="link-arrow" href="/sermons">
              Watch Sermons
            </Link>
          </p>
        </div>
      </section>

      {/* ------------------------------------------------ PLAN YOUR VISIT */}
      <section className="section" aria-labelledby="plan-your-visit">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionHeading
                eyebrow="Plan Your Visit"
                title="We'd Love To Welcome You"
              />
              <div className="prose">
                <p>
                  <strong>{siteConfig.displayName}</strong>
                  <br />
                  {siteConfig.address.line1},
                  <br />
                  {siteConfig.address.line2}
                </p>
                <p className="tbc-note">
                  What to expect · Parking · Children · Accessibility — {TBC}
                </p>
              </div>
              <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
                <a
                  className="btn btn--dark"
                  href={externalLinks.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div>
              <h3 className="section-title" style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>
                Sunday Services
              </h3>
              <ServiceSchedule services={sundayServices} />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ GIVING */}
      <section className="section section--cream" aria-labelledby="giving">
        <div className="container">
          <SectionHeading
            eyebrow="Giving"
            title="Generous Hearts"
            lede="Your generosity enables us to fulfill our mission and serve our community. Thank you for being a faithful steward of God's blessings."
          />
          <div className="card-grid">
            {givingMethods.map((method) => (
              <GivingCard key={method.slug} method={method} />
            ))}
          </div>
          <div className="paybill-box" style={{ marginTop: "1.5rem" }}>
            <div className="paybill-row">
              <div>
                <p className="paybill-label">{mpesaPaybill.method} Paybill</p>
                <p className="paybill-value">{mpesaPaybill.paybill}</p>
              </div>
              <CopyButton value={mpesaPaybill.paybill} label="Copy Paybill" />
            </div>
            <div className="paybill-row">
              <div>
                <p className="paybill-label">Account</p>
                <p style={{ color: "var(--ivory)" }}>{mpesaPaybill.account}</p>
              </div>
              <Link className="btn btn--gold" href="/give">
                Give Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CONTACT */}
      <section className="section" aria-labelledby="contact">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionHeading eyebrow="Contact" title="Connect With Us" />
              <div className="prose">
                <p>
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
                  <strong>Lead Pastors:</strong> {siteConfig.leadPastors}
                </p>
              </div>
            </div>
            <div className="hero-actions" style={{ alignContent: "start" }}>
              <a className="btn btn--gold" href={`tel:${siteConfig.phoneHref}`}>
                Call Us
              </a>
              <a className="btn btn--outline" href={`mailto:${siteConfig.email}`}>
                Email Us
              </a>
              <a
                className="btn btn--outline"
                href={externalLinks.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

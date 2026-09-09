import { departments, ministries, worshipTeams } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  DepartmentCard,
  MinistryCard,
  WorshipTeamCard,
} from "@/components/Cards";
import { CTASection } from "@/components/CTASection";

export const metadata = pageMetadata({
  title: "Ministries & Departments",
  description:
    "Explore the ministries, worship teams and departments of Deliverance Church Utawala — Eagles, Daughters of Faith, Sunday School, Legacy, Outreach, Micro-Churches, Discipleship and more.",
  path: "/ministries",
});

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Belong"
        title="Ministries & Departments"
        lede="Discover opportunities to grow, serve, connect and participate in the life of the church."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Ministries", path: "/ministries" },
        ]}
      />

      <section className="section" id="ministries">
        <div className="container">
          <SectionHeading
            eyebrow="Ministries"
            title="Find your place"
            lede="From children to men and women, every season of life has a home here."
            wide
          />
          <div className="card-grid card-grid--3">
            {ministries.map((ministry, index) => (
              <MinistryCard key={ministry.slug} ministry={ministry} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" id="worship-ministry">
        <div className="container">
          <SectionHeading
            eyebrow="Worship Ministry"
            title="Teams that lead us into His presence"
            lede="Our worship teams help the church encounter God through worship, song and music."
            wide
          />
          <div className="card-grid card-grid--3">
            {worshipTeams.map((team) => (
              <WorshipTeamCard key={team.slug} team={team} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" id="departments">
        <div className="container">
          <SectionHeading
            eyebrow="Departments"
            title="Serving behind the scenes"
            lede="Departments keep the house running — from welcoming guests to keeping every service safe and seamless."
            wide
          />
          <div className="card-grid card-grid--3">
            {departments.map((department) => (
              <DepartmentCard key={department.slug} department={department} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Get involved"
        title="Ready to serve?"
        lede="Talk to us about joining a ministry, team or department."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Prayer Request", href: "/prayer-request", variant: "light" },
        ]}
      />
    </>
  );
}

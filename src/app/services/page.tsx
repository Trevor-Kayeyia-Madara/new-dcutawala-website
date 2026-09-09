import { services, siteConfig } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceSchedule } from "@/components/ServiceSchedule";
import { CTASection } from "@/components/CTASection";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Weekly service schedule at Deliverance Church Utawala: Sunday First Service 6:30–9:00 AM, Sunday Second Service 9:30 AM–12:00 PM, Tuesday Fellowship, Wednesday Anchored Service and Friday Ignite Service.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Weekly Rhythm"
        title="Services"
        lede="The complete weekly schedule of Deliverance Church Utawala. All services are held at our Utawala Road sanctuary and are open to everyone."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Schedule"
            title="This week at DC Utawala"
            lede={`${siteConfig.address.line1}, ${siteConfig.address.line2}`}
            wide
          />
          <ServiceSchedule services={services} />
        </div>
      </section>
      <CTASection
        eyebrow="First time?"
        title="We'd love to welcome you"
        lede="Everything you need to know before your first visit — location, times and what to expect."
        actions={[
          { label: "Plan Your Visit", href: "/plan-your-visit" },
          { label: "Contact Us", href: "/contact", variant: "light" },
        ]}
      />
    </>
  );
}

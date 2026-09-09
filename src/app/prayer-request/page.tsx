import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { PrayerRequestForm } from "@/components/PrayerRequestForm";
import { ScriptureBlock } from "@/components/ScriptureBlock";

export const metadata = pageMetadata({
  title: "Prayer Request",
  description:
    "Share a prayer request with Deliverance Church Utawala. Our team will receive it and pray with you.",
  path: "/prayer-request",
});

export default function PrayerRequestPage() {
  return (
    <>
      <PageHero
        eyebrow="Prayer"
        title="Prayer Request"
        lede="Whatever you are carrying, you do not have to carry it alone. Share it with us and we will stand with you in prayer."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Prayer Request", path: "/prayer-request" },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionHeading eyebrow="Share your request" title="We will pray with you" />
              <PrayerRequestForm />
            </div>
            <div>
              <ScriptureBlock
                text="Cast all your anxiety on him because he cares for you."
                reference="1 Peter 5:7"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { notFound } from "next/navigation";
import { leaders, TBC } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { ArtPanel } from "@/components/ArtPanel";
import { CTASection } from "@/components/CTASection";

interface LeaderPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return leaders.map((leader) => ({ slug: leader.slug }));
}

export function generateMetadata({ params }: LeaderPageProps) {
  return params.then(({ slug }) => {
    const leader = leaders.find((item) => item.slug === slug);
    if (!leader) return {};
    return pageMetadata({
      title: `${leader.name} — ${leader.role}`,
      description: `${leader.name}, ${leader.role} of Deliverance Church Utawala.`,
      path: `/leadership/${slug}`,
    });
  });
}

export default async function LeaderPage({ params }: LeaderPageProps) {
  const { slug } = await params;
  const leader = leaders.find((item) => item.slug === slug);
  if (!leader) notFound();

  return (
    <>
      <PageHero
        eyebrow={leader.role}
        title={leader.name}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Leadership", path: "/leadership" },
          { name: leader.name, path: `/leadership/${leader.slug}` },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="two-col">
            {leader.photo ? (
              <img src={leader.photo} alt={leader.name} style={{ width: "100%", borderRadius: "var(--radius)" }} />
            ) : (
              <ArtPanel
                mark="✝"
                label={`Portrait placeholder for ${leader.name}`}
                style={{ minHeight: "24rem" }}
              />
            )}
            <div className="prose">
              <p>
                <strong>{leader.role}</strong> of {`Deliverance Church Utawala`}.
              </p>
              <div>
                <h2 className="footer-heading" style={{ color: "var(--gold-deep)" }}>
                  Biography
                </h2>
                <p>{leader.biography ?? <span className="tbc-note">{TBC}</span>}</p>
              </div>
              <div>
                <h2 className="footer-heading" style={{ color: "var(--gold-deep)" }}>
                  Ministry responsibility
                </h2>
                <p>
                  {leader.responsibility ?? <span className="tbc-note">{TBC}</span>}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        eyebrow="Connect"
        title="Reach the pastoral office"
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Plan Your Visit", href: "/plan-your-visit", variant: "light" },
        ]}
      />
    </>
  );
}

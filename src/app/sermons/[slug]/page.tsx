import { notFound } from "next/navigation";
import { sermons } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";

interface SermonPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sermons.map((sermon) => ({ slug: sermon.slug }));
}

export function generateMetadata({ params }: SermonPageProps) {
  return params.then(({ slug }) => {
    const sermon = sermons.find((item) => item.slug === slug);
    if (!sermon) return {};
    return pageMetadata({
      title: sermon.title,
      description: `${sermon.title} — ${sermon.speaker}, ${sermon.date}. A sermon from Deliverance Church Utawala.`,
      path: `/sermons/${slug}`,
      type: "article",
    });
  });
}

export default async function SermonPage({ params }: SermonPageProps) {
  const { slug } = await params;
  const sermon = sermons.find((item) => item.slug === slug);
  if (!sermon) notFound();

  return (
    <>
      <PageHero
        eyebrow={sermon.series ?? "Sermon"}
        title={sermon.title}
        lede={`${sermon.speaker} · ${sermon.date}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Sermons", path: "/sermons" },
          { name: sermon.title, path: `/sermons/${sermon.slug}` },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="two-col two-col--aside">
            <div className="prose">
              {sermon.youtubeId ? (
                <div className="map-frame">
                  <iframe
                    title={sermon.title}
                    src={`https://www.youtube-nocookie.com/embed/${sermon.youtubeId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ) : (
                <p className="tbc-note">Watch link [CONTENT TO BE CONFIRMED BY DC UTAWALA]</p>
              )}
              <p>{sermon.summary}</p>
            </div>
            <div style={{ display: "grid", gap: "1.25rem" }}>
              <div className="card">
                <span className="card__subtitle">Speaker</span>
                <p className="card__body">{sermon.speaker}</p>
                <span className="card__subtitle">Date</span>
                <p className="card__body">{sermon.date}</p>
                {sermon.series && (
                  <>
                    <span className="card__subtitle">Series</span>
                    <p className="card__body">{sermon.series}</p>
                  </>
                )}
                {sermon.topic && (
                  <>
                    <span className="card__subtitle">Topic</span>
                    <p className="card__body">{sermon.topic}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

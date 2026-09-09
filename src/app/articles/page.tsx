import { articles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ArticleCard } from "@/components/Cards";
import { EmptyState } from "@/components/EmptyState";

export const metadata = pageMetadata({
  title: "Articles",
  description:
    "Articles and written reflections from the leaders of Deliverance Church Utawala.",
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Written Word"
        title="Articles"
        lede="Reflections, teachings and stories from the life of our church."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Articles", path: "/articles" },
        ]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Library" title="Recent articles" wide />
          {articles.length > 0 ? (
            <div className="card-grid card-grid--3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="New articles will appear here soon."
              body="Written resources from our leaders will be published here once available."
            />
          )}
        </div>
      </section>
    </>
  );
}

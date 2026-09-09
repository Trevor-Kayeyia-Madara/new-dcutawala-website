import { notFound } from "next/navigation";
import { articles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArticlePageProps) {
  return params.then(({ slug }) => {
    const article = articles.find((item) => item.slug === slug);
    if (!article) return {};
    return pageMetadata({
      title: article.title,
      description: article.excerpt,
      path: `/articles/${slug}`,
      type: "article",
    });
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        eyebrow={article.date}
        title={article.title}
        lede={`By ${article.author}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Articles", path: "/articles" },
          { name: article.title, path: `/articles/${article.slug}` },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="prose">
            <p>{article.excerpt}</p>
            {article.content && <p>{article.content}</p>}
          </div>
        </div>
      </section>
    </>
  );
}

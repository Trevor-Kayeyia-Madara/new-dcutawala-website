import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lede?: string;
  breadcrumbs: { name: string; path: string }[];
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, lede, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}

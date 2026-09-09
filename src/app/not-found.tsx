import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  path: "/404",
});

export default function NotFoundPage() {
  return (
    <section className="section page-hero" style={{ minHeight: "60vh" }}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 style={{ marginTop: "1rem" }}>We couldn&apos;t find that page</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          The page may have moved, or the link may be out of date. Let&apos;s
          get you back to familiar ground.
        </p>
        <div className="hero-actions" style={{ marginTop: "2rem" }}>
          <Link className="btn btn--gold" href="/">
            Back to Home
          </Link>
          <Link className="btn btn--light" href="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

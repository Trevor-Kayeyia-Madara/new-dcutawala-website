import Link from "next/link";

interface CTAAction {
  label: string;
  href: string;
  variant?: "gold" | "light" | "outline";
  external?: boolean;
}

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  actions: CTAAction[];
}

export function CTASection({ eyebrow, title, lede, actions }: CTASectionProps) {
  return (
    <section className="section--dark section">
      <div className="container">
        <div className="section-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="display-2">{title}</h2>
          {lede && <p className="lede">{lede}</p>}
        </div>
        <div className="hero-actions">
          {actions.map((action) => (
            <Link
              key={action.href}
              className={`btn btn--${action.variant ?? "gold"}`}
              href={action.href}
              {...(action.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

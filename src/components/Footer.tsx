import Link from "next/link";
import { siteConfig, socialLinks } from "@/lib/content";

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Services", href: "/services" },
  { label: "Leadership", href: "/leadership" },
  { label: "School", href: "/school" },
  { label: "Resources", href: "/resources" },
];

const connectLinks = [
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
  { label: "Plan Your Visit", href: "/plan-your-visit" },
  { label: "Prayer Request", href: "/prayer-request" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src={siteConfig.logo}
              alt={`${siteConfig.displayName} logo`}
              width={64}
              height={64}
              loading="lazy"
            />
            <div>
              <p className="brand-name" style={{ color: "var(--ivory)" }}>
                {siteConfig.displayName}
              </p>
              <p className="brand-loc">{siteConfig.tagline}</p>
            </div>
            <p className="footer-mission">“{siteConfig.mission}”</p>
          </div>

          <nav aria-label="Explore">
            <h2 className="footer-heading">Explore</h2>
            <ul className="footer-list">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Connect">
            <h2 className="footer-heading">Connect</h2>
            <ul className="footer-list">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer-heading">Contact</h2>
            <ul className="footer-list">
              <li>
                <address>
                  {siteConfig.address.line1},
                  <br />
                  {siteConfig.address.line2}
                </address>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
            {socialLinks.length > 0 && (
              <>
                <h2 className="footer-heading" style={{ marginTop: "1.5rem" }}>
                  Follow Us
                </h2>
                <ul className="footer-list">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 {siteConfig.displayName}. All rights reserved.</p>
          <p>
            {siteConfig.address.line1} · {siteConfig.address.line2.split(",")[0]}, Nairobi
          </p>
        </div>
      </div>
    </footer>
  );
}

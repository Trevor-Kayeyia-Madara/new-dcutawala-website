"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/lib/content";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label={`${siteConfig.displayName} — home`}>
          {/* Official logo: never stretched, recoloured or filtered */}
          <img
            className="brand-logo"
            src={siteConfig.logo}
            alt=""
            width={46}
            height={46}
            fetchPriority="high"
          />
          <span className="brand-text">
            <span className="brand-name">Deliverance Church</span>
            <span className="brand-loc">Utawala · Nairobi</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="nav-link"
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link className="btn btn--gold header-cta" href="/plan-your-visit">
            Plan Your Visit
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div id="mobile-navigation">
        <MobileNavigation open={open} onNavigate={() => setOpen(false)} />
      </div>
    </header>
  );
}

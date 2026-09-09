"use client";

import Link from "next/link";
import { navigation } from "@/lib/content";

interface MobileNavigationProps {
  open: boolean;
  onNavigate: () => void;
}

const quickActions = [
  { label: "Services", href: "/services" },
  { label: "Plan Your Visit", href: "/plan-your-visit" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

export function MobileNavigation({ open, onNavigate }: MobileNavigationProps) {
  return (
    <nav
      className="mobile-nav"
      data-open={open}
      aria-label="Mobile navigation"
      hidden={!open}
    >
      <ul>
        {navigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={onNavigate}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mobile-nav-actions">
        {quickActions.map((action) => (
          <Link
            key={action.href}
            className="btn btn--gold"
            href={action.href}
            onClick={onNavigate}
          >
            {action.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

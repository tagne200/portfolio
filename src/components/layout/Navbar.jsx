import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "../../data/placeholderContent.js";
import { Link, usePathname } from "../../lib/router.jsx";
import ThemePicker from "./ThemePicker.jsx";

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActive("");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-inner container">
        <Link href="/#top" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">{PROFILE.initials}</span>
          <span className="brand-name">{PROFILE.name}</span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => {
            const isCurrentPage = link.href === pathname;
            return (
              <Link
                key={link.id}
                href={link.href ?? `/#${link.id}`}
                className={isCurrentPage || active === link.id ? "is-active" : ""}
                aria-current={isCurrentPage ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="navbar-actions">
          <button className="btn btn-primary btn-sm nav-resume" onClick={onOpenResume}>
            CV
          </button>
          <ThemePicker />
          <button
            className={`burger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

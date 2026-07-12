import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import BrandLogo from "./BrandLogo";

function LangToggle({ className = "" }) {
  const { lang, toggleLang, t } = useLang();
  return (
    <button
      onClick={toggleLang}
      aria-label={`Switch language to ${t.otherLangName}`}
      className={`inline-flex items-center rounded-full border border-hair bg-cream px-1 py-1 text-[13px] font-body font-semibold ${className}`}
    >
      <span
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "en" ? "bg-forest text-cream" : "text-muted"
        }`}
      >
        EN
      </span>
      <span
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "ur" ? "bg-forest text-cream" : "text-muted"
        }`}
        style={{ fontFamily: '"Noto Nastaliq Urdu", serif' }}
      >
        اردو
      </span>
    </button>
  );
}

function Logo({ onClick }) {
  const { t } = useLang();
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-3 shrink-0" aria-label="Hamza Welfare Hospital home">
      <BrandLogo className="h-12 w-auto sm:h-14" />
      <span className="hidden md:flex flex-col leading-tight">
        <span className="font-display text-[18px] font-semibold text-forest">Hamza Welfare Hospital</span>
        <span className="font-body text-[11px] tracking-wide text-maroon">{t.common.since}</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);
  const firstLinkRef = useRef(null);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/doctors", label: t.nav.doctors },
    { to: "/gallery", label: t.nav.gallery },
    { to: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // Focus trap + ESC + outside click + body lock for the mobile drawer
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("no-scroll");
    firstLinkRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Drawer sits on the right (LTR) / left (RTL); enter from that off-screen edge.
  const enterX = t.dir === "rtl" ? "-100%" : "100%";

  const navLinkClass = ({ isActive }) =>
    `font-body text-[15px] transition-colors ${
      isActive ? "text-forest font-semibold" : "text-ink/80 hover:text-forest"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-cream/95 backdrop-blur transition-all duration-300 ${
          scrolled ? "shadow-header py-2" : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5">
          <Logo />

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={navLinkClass} end={l.to === "/"}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LangToggle />
            <Link
              to="/donate"
              className="inline-flex items-center rounded-full bg-maroon px-5 py-2.5 font-body text-[15px] font-semibold text-cream transition-all hover:bg-maroon2 hover:-translate-y-0.5"
            >
              {t.nav.donate}
            </Link>
            <Link
              to="/appointment"
              className="inline-flex items-center rounded-full border-2 border-forest px-4 py-2 font-body text-[14px] font-semibold text-forest transition-all hover:bg-forest hover:text-cream"
            >
              {t.nav.book}
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LangToggle />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="rounded-full border border-hair p-2 text-forest"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-ink/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed inset-y-0 z-[70] flex w-[82%] max-w-[340px] flex-col bg-cream p-6 ltr:right-0 rtl:left-0 shadow-lift"
              initial={{ x: enterX }}
              animate={{ x: 0 }}
              exit={{ x: enterX }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            >
              <div className="mb-8 flex items-center justify-between">
                <BrandLogo className="h-11 w-auto" />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-full border border-hair p-2 text-forest">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {links.map((l, i) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    ref={i === 0 ? firstLinkRef : null}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-3 font-body text-lg ${
                        isActive ? "bg-sagetint text-forest font-semibold" : "text-ink/85"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Link to="/donate" className="rounded-full bg-maroon px-5 py-3 text-center font-body font-semibold text-cream">
                  {t.nav.donate}
                </Link>
                <Link to="/appointment" className="rounded-full border-2 border-forest px-5 py-3 text-center font-body font-semibold text-forest">
                  {t.nav.book}
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

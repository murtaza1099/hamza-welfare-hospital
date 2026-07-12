import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/doctors", label: t.nav.doctors },
    { to: "/gallery", label: t.nav.gallery },
    { to: "/appointment", label: t.nav.book },
    { to: "/donate", label: t.nav.donate },
  ];

  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Mission */}
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo className="h-12 w-auto" variant="light" />
            <p className="font-display text-xl font-semibold">Hamza Welfare Hospital</p>
          </div>
          <p className="mt-4 font-body text-[15px] leading-relaxed text-cream/85">{t.footer.mission}</p>
          <p className="mt-5 font-body text-[13px] text-cream/70">{t.common.projectOf}</p>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-display text-lg font-semibold">{t.footer.quickLinks}</p>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="font-body text-[15px] text-cream/85 hover:text-cream hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-display text-lg font-semibold">{t.footer.contact}</p>
          <ul className="mt-4 space-y-3 font-body text-[15px] text-cream/85">
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0" />
              <a href="tel:+923335115038" className="hover:text-cream" dir="ltr">0333 5115038</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0" />
              <a href={`mailto:${t.common.email}`} className="break-all hover:text-cream" dir="ltr">
                {t.common.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <span>{t.common.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Facebook size={18} className="mt-0.5 shrink-0" />
              <a
                href="https://www.facebook.com/hamzawelfarehospital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream"
              >
                {t.common.findUsFacebook}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <p className="font-display text-lg font-semibold">{t.footer.hours}</p>
          <ul className="mt-4 space-y-3 font-body text-[15px] text-cream/85">
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 shrink-0" />
              <span>
                {t.hours.morning}: <span dir="ltr">{t.hours.morningTime}</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 shrink-0" />
              <span>
                {t.hours.evening}: <span dir="ltr">{t.hours.eveningTime}</span>
              </span>
            </li>
            <li className="ltr:pl-8 rtl:pr-8 text-cream/70">{t.hours.daily}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-5 py-5 text-center font-body text-[13px] text-cream/70 sm:flex-row sm:text-start">
          <span>© {year} {t.footer.rights}</span>
          <span>{t.common.since}</span>
        </div>
      </div>
    </footer>
  );
}

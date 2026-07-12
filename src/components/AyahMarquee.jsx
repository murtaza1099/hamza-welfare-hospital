import { useLang } from "../context/LanguageContext";

// The verse (Surah Al-Ma'idah 5:32) in Arabic + its English/Urdu meaning,
// plus the tagline, cycled through a seamless infinite marquee.
const AYAH = "مَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا";

function Sep() {
  return (
    <span className="mx-6 inline-flex items-center text-sage/60 sm:mx-9" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
        <path d="M12 3 L21 15 H3 Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function Track({ t }) {
  // One track's worth of content; duplicated by the parent for a seamless loop.
  return (
    <div className="flex shrink-0 items-center whitespace-nowrap">
      <span className="font-arabic text-[20px] text-cream sm:text-[24px]" dir="rtl" lang="ar">
        {AYAH}
      </span>
      <Sep />
      <span className="font-body text-[13px] uppercase tracking-[0.18em] text-cream/85 sm:text-[14px]">
        {t.marquee.ayahTranslation}
      </span>
      <Sep />
    </div>
  );
}

export default function AyahMarquee() {
  const { t } = useLang();
  return (
    <section className="overflow-hidden bg-forest py-4" aria-label={t.marquee.ayahTranslation}>
      <div className="marquee">
        {/* Two identical tracks side-by-side: when the first scrolls out, the
            second is already in place, so the loop is seamless. */}
        <Track t={t} />
        <Track t={t} />
      </div>
    </section>
  );
}

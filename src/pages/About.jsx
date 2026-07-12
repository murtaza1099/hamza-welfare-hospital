import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import PageHeader from "../components/PageHeader";
import { Reveal, Eyebrow, DoubleRule, DonateButton, ImageSlot } from "../components/ui";
import { HeartHandshake, DoorOpen, HandHeart, Camera } from "lucide-react";

// Image slot per trustee (index-aligned with the translations trustees array).
const trusteeImages = [
  "trustee-zahid.jpg",
  "trustee-tariq.jpg",
  "trustee-hasnat.jpg",
  "trustee-haleema.jpg",
  "trustee-rafia.jpg",
  "trustee-asma.jpg",
  "trustee-aftab.jpg",
];

function Timeline() {
  const { t } = useLang();
  const a = t.aboutPage;
  const items = [
    { year: a.t1Year, title: a.t1Title, body: a.t1Body, img: "about-history.jpg" },
    { year: a.t2Year, title: a.t2Title, body: a.t2Body },
    { year: a.t3Year, title: a.t3Title, body: a.t3Body, img: "hero-building.jpg" },
    { year: a.t4Year, title: a.t4Title, body: a.t4Body, img: "nijat-care.jpg" },
  ];
  return (
    <section className="grain bg-cream">
      <div className="mx-auto max-w-[1000px] px-5 py-section">
        <Reveal className="text-center">
          <Eyebrow>{a.timelineTitle}</Eyebrow>
        </Reveal>

        <div className="relative mt-14 ltr:pl-10 rtl:pr-10 sm:ltr:pl-0 sm:rtl:pr-0">
          {/* vertical spine */}
          <span
            className="absolute inset-y-2 w-px bg-sage/40 ltr:left-3 rtl:right-3 sm:ltr:left-1/2 sm:rtl:right-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />
          <div className="space-y-12 sm:space-y-16">
            {items.map((it, i) => {
              const rightSide = i % 2 === 1;
              return (
                <Reveal key={i} delay={0.05}>
                  <div className={`relative sm:grid sm:grid-cols-2 sm:gap-10 sm:items-center ${rightSide ? "" : "sm:[&>*:first-child]:col-start-1"}`}>
                    {/* node */}
                    <span
                      className="absolute top-2 h-3.5 w-3.5 rounded-full bg-forest ring-4 ring-sagetint ltr:-left-[26px] rtl:-right-[26px] sm:ltr:left-1/2 sm:rtl:right-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2"
                      aria-hidden="true"
                    />
                    {/* text block */}
                    <div className={`${rightSide ? "sm:col-start-2 sm:ltr:pl-10 sm:rtl:pr-10" : "sm:col-start-1 sm:ltr:pr-10 sm:rtl:pl-10 sm:text-end"}`}>
                      <div className="font-body text-[13px] font-semibold uppercase tracking-[0.14em] text-maroon">{it.year}</div>
                      <h3 className="mt-1.5 font-display text-[22px] font-medium text-ink">{it.title}</h3>
                      <p className="mt-2 font-body text-[15px] leading-relaxed text-muted">{it.body}</p>
                    </div>
                    {/* image block */}
                    <div className={`mt-5 sm:mt-0 ${rightSide ? "sm:col-start-1 sm:row-start-1 sm:ltr:pr-10 sm:rtl:pl-10" : "sm:col-start-2 sm:ltr:pl-10 sm:rtl:pr-10"}`}>
                      {it.img ? (
                        <ImageSlot src={it.img} ratio="4/3" alt={`${it.title} — Hamza Welfare Hospital`} rounded="rounded-xl" />
                      ) : (
                        <div className="hidden sm:block" aria-hidden="true" />
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const { t } = useLang();
  const a = t.aboutPage;
  const vals = [
    { Icon: HeartHandshake, title: a.value1Title, body: a.value1Body },
    { Icon: DoorOpen, title: a.value2Title, body: a.value2Body },
    { Icon: HandHeart, title: a.value3Title, body: a.value3Body },
  ];
  return (
    <section className="bg-cream2">
      <div className="mx-auto max-w-[1100px] px-5 py-section">
        <Reveal className="text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-medium text-ink">{a.valuesTitle}</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {vals.map((v, i) => (
            <Reveal key={i} delay={i * 0.08} className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sagetint text-forest">
                <v.Icon size={26} strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-[21px] font-medium text-forest">{v.title}</h3>
              <p className="mx-auto mt-2 max-w-xs font-body text-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrusteePortrait({ img, name }) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border border-hair bg-sagetint sm:h-32 sm:w-32">
      {!errored ? (
        <img
          src={`/images/${img}`}
          alt={`${name}, Hamza Welfare Hospital Board of Trustees`}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-sage">
          <Camera size={22} strokeWidth={1.5} />
        </span>
      )}
    </div>
  );
}

function Leadership() {
  const { t } = useLang();
  const a = t.aboutPage;
  return (
    <section className="grain bg-cream">
      <div className="mx-auto max-w-[1100px] px-5 py-section">
        <Reveal className="text-center">
          <Eyebrow tone="maroon">{a.leadershipIntro}</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-medium text-ink">{a.leadershipTitle}</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {t.trustees.map((p, i) => (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.25)} className="text-center">
              <TrusteePortrait img={trusteeImages[i]} name={p.name} />
              <h3 className="mt-4 font-display text-[17px] font-medium text-ink">{p.name}</h3>
              <p className="mx-auto mt-1 max-w-[22ch] font-body text-[13px] leading-snug text-muted">{p.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const { t } = useLang();
  const a = t.aboutPage;
  return (
    <section className="bg-cream2">
      <div className="mx-auto max-w-[1200px] px-5 py-section">
        <Reveal className="text-center">
          <Eyebrow>{a.galleryEyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(1.7rem,3.6vw,2.4rem)] font-medium text-ink">{a.galleryTitle}</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {["gallery-01.jpg", "gallery-02.jpg", "gallery-03.jpg", "gallery-04.jpg"].map((g, i) => (
            <Reveal key={g} delay={(i % 4) * 0.06}>
              <ImageSlot src={g} ratio="1/1" alt="Hamza Welfare Hospital — patient care and community moments" rounded="rounded-xl" />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/gallery" className="font-body font-semibold text-forest hover:underline">
            {t.nav.gallery} →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Promise() {
  const { t } = useLang();
  const a = t.aboutPage;
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto max-w-[900px] px-5 py-section text-center">
        <Reveal>
          <Eyebrow className="text-cream/70">{a.promiseTitle}</Eyebrow>
          <p className="mx-auto mt-5 max-w-2xl font-display text-[clamp(1.4rem,3vw,2rem)] italic leading-relaxed">
            {a.promiseBody}
          </p>
          <DonateButton className="mt-8">{t.common.donateNow}</DonateButton>
        </Reveal>
      </div>
    </section>
  );
}

export default function About() {
  const { t, lang } = useLang();
  useSeo(
    lang === "ur"
      ? "ہمارے بارے میں — حمزہ ویلفیئر ہسپتال، پنڈ بیگوال"
      : "About Us — Hamza Welfare Hospital, Pind Begwal Islamabad",
    t.aboutPage.intro
  );
  return (
    <>
      <PageHeader eyebrow={t.aboutPage.eyebrow} title={t.aboutPage.title} intro={t.aboutPage.intro} />
      <DoubleRule />
      <Timeline />
      <Values />
      <Leadership />
      <GalleryStrip />
      <Promise />
    </>
  );
}

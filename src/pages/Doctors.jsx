import { useLang } from "../context/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import PageHeader from "../components/PageHeader";
import ScheduleTable from "../components/ScheduleTable";
import { Reveal, DoubleRule, ImageSlot, PrimaryButton, DonateButton } from "../components/ui";

function DoctorCard({ image, name, role, bio, reverse }) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-[280px_1fr] md:gap-12">
      <div className={`mx-auto w-full max-w-[280px] md:mx-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
        <ImageSlot src={image} ratio="1/1" alt={`${name} — ${role}`} rounded="rounded-2xl" />
      </div>
      <div className={`text-center md:text-start ${reverse ? "md:order-1" : "md:order-2"}`}>
        <h3 className="font-display text-[24px] font-medium text-ink">{name}</h3>
        <p className="mt-1 font-body text-[15px] font-semibold text-maroon">{role}</p>
        <p className="mx-auto mt-4 max-w-prose68 font-body leading-relaxed text-muted md:mx-0">{bio}</p>
      </div>
    </div>
  );
}

export default function Doctors() {
  const { t, lang } = useLang();
  const d = t.doctorsPage;
  useSeo(
    lang === "ur" ? "ڈاکٹرز اور شیڈول — حمزہ ویلفیئر ہسپتال" : "Doctors & Schedule — Hamza Welfare Hospital",
    d.intro
  );
  return (
    <>
      <PageHeader eyebrow={d.eyebrow} title={d.title} intro={d.intro} />
      <DoubleRule />

      <section className="grain bg-cream">
        <div className="mx-auto max-w-[1000px] space-y-16 px-5 py-section">
          <Reveal>
            <DoctorCard
              image="doctor-rafia.jpg"
              name={t.trustees[4].name}
              role={t.trustees[4].role}
              bio={d.rafiaBio}
            />
          </Reveal>
          <Reveal>
            <DoctorCard
              image="doctor-asma.jpg"
              name={t.trustees[5].name}
              role={t.trustees[5].role}
              bio={d.asmaBio}
              reverse
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream2">
        <div className="mx-auto max-w-[1000px] px-5 py-section">
          <Reveal className="text-center">
            <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.3rem)] font-medium text-ink">
              {t.servicesPage.scheduleTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-10">
            <ScheduleTable />
          </Reveal>
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-[900px] px-5 py-section text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-medium">{d.ctaTitle}</h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton to="/appointment" className="w-full bg-cream text-forest hover:bg-white sm:w-auto">
                {t.common.bookAppointment}
              </PrimaryButton>
              <DonateButton className="w-full justify-center sm:w-auto">{t.common.donateNow}</DonateButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

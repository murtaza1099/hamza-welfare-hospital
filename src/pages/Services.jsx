import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sun, Moon } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import PageHeader from "../components/PageHeader";
import ScheduleTable from "../components/ScheduleTable";
import { serviceItems } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { Reveal, Eyebrow, DoubleRule, DonateButton, OutlineButton } from "../components/ui";

function ServicesGrid() {
  return (
    <section className="grain bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 py-section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((item, i) => (
            <Reveal key={item.key} delay={(i % 3) * 0.06}>
              <ServiceCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShiftsAndDiag() {
  const { t } = useLang();
  const s = t.servicesPage;
  return (
    <section className="bg-cream2">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-section lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="mb-4 flex gap-2 text-forest">
            <Sun size={22} /> <Moon size={22} />
          </div>
          <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.3rem)] font-medium text-ink">{s.shiftTitle}</h2>
          <p className="prose-col mt-4 font-body text-muted">{s.shiftBody}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.3rem)] font-medium text-ink">{s.diagTitle}</h2>
          <p className="prose-col mt-4 font-body text-muted">{s.diagBody}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Schedule() {
  const { t } = useLang();
  return (
    <section className="grain bg-cream">
      <div className="mx-auto max-w-[1000px] px-5 py-section">
        <Reveal>
          <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.3rem)] font-medium text-ink">
            {t.servicesPage.scheduleTitle}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-8">
          <ScheduleTable />
        </Reveal>
      </div>
    </section>
  );
}

function FaqItem({ q, a, isOpen, onToggle, id }) {
  return (
    <div className="border-b border-hair">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          id={`faq-btn-${id}`}
          className="flex w-full items-center justify-between gap-4 py-5 text-start font-display text-[19px] font-medium text-ink"
        >
          <span>{q}</span>
          <span className="shrink-0 text-forest">{isOpen ? <Minus size={20} /> : <Plus size={20} />}</span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-btn-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="prose-col pb-5 font-body text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-cream2">
      <div className="mx-auto max-w-[840px] px-5 py-section">
        <Reveal>
          <Eyebrow>{t.servicesPage.faqEyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,2.5rem)] font-medium text-ink">
            {t.servicesPage.faqTitle}
          </h2>
        </Reveal>
        <div className="mt-8 border-t border-hair">
          {t.servicesPage.faqs.map((f, i) => (
            <FaqItem
              key={i}
              id={i}
              q={f.q}
              a={f.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <OutlineButton to="/appointment">{t.common.bookAppointment}</OutlineButton>
          <DonateButton>{t.common.donateNow}</DonateButton>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const { t, lang } = useLang();
  useSeo(
    lang === "ur"
      ? "خدمات | حمزہ ویلفیئر ہسپتال، پنڈ بیگوال"
      : "Services | Free OPD, Gynecology, Oncology & Pharmacy — Hamza Welfare Hospital",
    lang === "ur"
      ? "حمزہ ویلفیئر ہسپتال میں خدمات: روزانہ دو شفٹوں میں جنرل او پی ڈی، امراضِ نسواں، آنکولوجی، الٹراساؤنڈ، ای سی جی اور مفت فارمیسی۔"
      : "Free and subsidized services at Hamza Welfare Hospital, Pind Begwal: general OPD in two daily shifts, gynecology, oncology, ultrasound and ECG diagnostics, and a free pharmacy."
  );
  return (
    <>
      <PageHeader eyebrow={t.servicesPage.eyebrow} title={t.servicesPage.title} intro={t.servicesPage.intro} />
      <DoubleRule />
      <ServicesGrid />
      <ShiftsAndDiag />
      <Schedule />
      <Faq />
    </>
  );
}

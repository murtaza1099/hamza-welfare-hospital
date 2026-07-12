import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Clock } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import PageHeader from "../components/PageHeader";
import { DoubleRule, PrimaryButton, Reveal } from "../components/ui";
import { Field, TextInput, TextArea, SuccessPanel, validatePhone, Honeypot } from "../components/FormBits";
import { submitInquiry } from "../lib/submissions";

function Details() {
  const { t } = useLang();
  const c = t.contactPage;
  return (
    <div>
      <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.1rem)] font-medium text-ink">{c.detailsTitle}</h2>
      <ul className="mt-6 space-y-4 font-body text-[16px] text-ink/85">
        <li className="flex items-start gap-3">
          <Phone size={20} className="mt-0.5 shrink-0 text-forest" />
          <a href="tel:+923335115038" className="hover:text-forest" dir="ltr">0333 5115038</a>
        </li>
        <li className="flex items-start gap-3">
          <MessageCircle size={20} className="mt-0.5 shrink-0 text-forest" />
          <a href="https://wa.me/923335115038" target="_blank" rel="noopener noreferrer" className="hover:text-forest">
            {t.common.whatsapp}
          </a>
        </li>
        <li className="flex items-start gap-3">
          <Mail size={20} className="mt-0.5 shrink-0 text-forest" />
          <a href={`mailto:${t.common.email}`} className="break-all hover:text-forest" dir="ltr">{t.common.email}</a>
        </li>
        <li className="flex items-start gap-3">
          <MapPin size={20} className="mt-0.5 shrink-0 text-forest" />
          <span>{t.common.address}</span>
        </li>
        <li className="flex items-start gap-3">
          <Facebook size={20} className="mt-0.5 shrink-0 text-forest" />
          <a href="https://www.facebook.com/hamzawelfarehospital" target="_blank" rel="noopener noreferrer" className="hover:text-forest">
            {t.common.findUsFacebook}
          </a>
        </li>
      </ul>

      <div className="mt-8 rounded-xl border border-hair bg-cream/60 p-5">
        <p className="flex items-center gap-2 font-display text-[17px] font-medium text-forest">
          <Clock size={18} /> {t.hours.title}
        </p>
        <div className="mt-3 space-y-1 font-body text-[15px] text-ink/85">
          <p className="flex justify-between gap-4"><span>{t.hours.morning}</span><span dir="ltr">{t.hours.morningTime}</span></p>
          <p className="flex justify-between gap-4"><span>{t.hours.evening}</span><span dir="ltr">{t.hours.eveningTime}</span></p>
          <p className="pt-1 text-muted">{t.hours.daily}</p>
        </div>
      </div>
    </div>
  );
}

function InquiryForm() {
  const { t, lang } = useLang();
  const c = t.contactPage;
  const [form, setForm] = useState({ fullName: "", phone: "", message: "", website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const err = {};
    if (!form.fullName.trim()) err.fullName = t.forms.required;
    if (!form.phone.trim()) err.phone = t.forms.required;
    else if (!validatePhone(form.phone)) err.phone = t.forms.invalidPhone;
    if (!form.message.trim()) err.message = t.forms.required;
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    const res = await submitInquiry(form, lang);
    setStatus(res.ok ? "success" : "error");
  };

  if (status === "success") return <SuccessPanel title={c.successTitle} body={c.successBody} />;

  return (
    <div>
      <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.1rem)] font-medium text-ink">{c.formTitle}</h2>
      <form onSubmit={onSubmit} noValidate className="relative mt-6 grid gap-5 rounded-2xl border border-hair bg-cream/60 p-6">
        <Honeypot value={form.website} onChange={set("website")} />
        <Field label={c.name} required error={errors.fullName}>
          <TextInput value={form.fullName} onChange={set("fullName")} error={errors.fullName} autoComplete="name" />
        </Field>
        <Field label={c.phone} required error={errors.phone}>
          <TextInput value={form.phone} onChange={set("phone")} error={errors.phone} inputMode="tel" placeholder="03XX-XXXXXXX" dir="ltr" />
        </Field>
        <Field label={c.message} required error={errors.message}>
          <TextArea value={form.message} onChange={set("message")} error={errors.message} />
        </Field>
        {status === "error" && (
          <p className="rounded-lg bg-maroon/10 px-4 py-3 font-body text-[14px] text-maroon">{t.forms.networkError}</p>
        )}
        <PrimaryButton type="submit" className="w-full sm:w-auto">
          {status === "submitting" ? c.submitting : c.submit}
        </PrimaryButton>
      </form>
    </div>
  );
}

export default function Contact() {
  const { t, lang } = useLang();
  const c = t.contactPage;
  useSeo(
    lang === "ur"
      ? "رابطہ | حمزہ ویلفیئر ہسپتال، سملی ڈیم روڈ اسلام آباد"
      : "Contact | Hamza Welfare Hospital, Simly Dam Road, Islamabad",
    lang === "ur"
      ? "حمزہ ویلفیئر ہسپتال سے رابطہ کریں — فون 0333 5115038، پنڈ بیگوال، فضائیہ چوک، سملی ڈیم روڈ، اسلام آباد۔ او پی ڈی اوقات اور نقشہ۔"
      : "Contact Hamza Welfare Hospital — call 0333 5115038, visit us at Fazaiya Chowk, Simly Dam Road, Pind Begwal, Islamabad. OPD hours, WhatsApp and map."
  );

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} />
      <DoubleRule />
      <section className="grain bg-cream">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-5 py-section lg:grid-cols-2 lg:gap-16">
          <Reveal><Details /></Reveal>
          <Reveal delay={0.1}><InquiryForm /></Reveal>
        </div>
      </section>

      <section className="bg-cream2">
        <div className="mx-auto max-w-[1100px] px-5 pb-section">
          <Reveal>
            <h2 className="mb-6 font-display text-[clamp(1.5rem,3vw,2rem)] font-medium text-ink">{c.mapTitle}</h2>
            <div className="overflow-hidden rounded-2xl border border-hair">
              <iframe
                title={c.mapTitle}
                src="https://www.google.com/maps?q=Simly%20Dam%20Road%20Fazaiya%20Chowk%20Islamabad&output=embed"
                className="h-[400px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

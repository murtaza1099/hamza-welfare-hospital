import { useState } from "react";
import { Phone } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import PageHeader from "../components/PageHeader";
import { DoubleRule, PrimaryButton, Reveal } from "../components/ui";
import { Field, TextInput, TextArea, Select, SuccessPanel, validatePhone, Honeypot } from "../components/FormBits";
import { submitAppointment } from "../lib/submissions";

export default function Appointment() {
  const { t, lang } = useLang();
  const p = t.appointmentPage;
  useSeo(t.seo.appointmentTitle, t.seo.appointmentDesc);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    service: p.services[0],
    day: p.days[0],
    shift: p.shifts[0],
    note: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const err = {};
    if (!form.fullName.trim()) err.fullName = t.forms.required;
    if (!form.phone.trim()) err.phone = t.forms.required;
    else if (!validatePhone(form.phone)) err.phone = t.forms.invalidPhone;
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    const res = await submitAppointment(form, lang);
    setStatus(res.ok ? "success" : "error");
  };

  return (
    <>
      <PageHeader eyebrow={p.eyebrow} title={p.title} intro={p.intro} />
      <DoubleRule />
      <section className="grain bg-cream">
        <div className="mx-auto max-w-[720px] px-5 py-section">
          {status === "success" ? (
            <SuccessPanel
              title={p.successTitle}
              body={p.successBody}
              extra={
                <a href="tel:+923335115038" className="mt-5 inline-flex items-center gap-2 font-body font-semibold text-forest" dir="ltr">
                  <Phone size={18} /> 0333 5115038
                </a>
              }
            />
          ) : (
            <Reveal>
              <form onSubmit={onSubmit} noValidate className="relative grid gap-5 rounded-2xl border border-hair bg-cream/60 p-6 sm:p-8">
                <Honeypot value={form.website} onChange={set("website")} />
                <Field label={p.fullName} required error={errors.fullName}>
                  <TextInput value={form.fullName} onChange={set("fullName")} error={errors.fullName} autoComplete="name" />
                </Field>

                <Field label={p.phone} required hint={p.phoneHint} error={errors.phone}>
                  <TextInput value={form.phone} onChange={set("phone")} error={errors.phone} inputMode="tel" placeholder="03XX-XXXXXXX" dir="ltr" />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={p.service}>
                    <Select value={form.service} onChange={set("service")}>
                      {p.services.map((s) => <option key={s}>{s}</option>)}
                    </Select>
                  </Field>
                  <Field label={p.day}>
                    <Select value={form.day} onChange={set("day")}>
                      {p.days.map((d) => <option key={d}>{d}</option>)}
                    </Select>
                  </Field>
                </div>

                <Field label={p.shift}>
                  <Select value={form.shift} onChange={set("shift")}>
                    {p.shifts.map((s) => <option key={s}>{s}</option>)}
                  </Select>
                </Field>

                <Field label={p.note} optionalText={t.forms.optional}>
                  <TextArea value={form.note} onChange={set("note")} />
                </Field>

                {status === "error" && (
                  <p className="rounded-lg bg-maroon/10 px-4 py-3 font-body text-[14px] text-maroon">{t.forms.networkError}</p>
                )}

                <PrimaryButton type="submit" className="w-full sm:w-auto">
                  {status === "submitting" ? p.submitting : p.submit}
                </PrimaryButton>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}

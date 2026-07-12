import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const fieldWrap = "flex flex-col gap-1.5";
const labelCls = "font-body text-[14px] font-semibold text-ink";
const controlCls =
  "w-full rounded-lg border border-hair bg-white/70 px-4 py-3 font-body text-[16px] text-ink placeholder:text-muted/70 focus:border-forest focus:bg-white transition-colors";
const errorCls = "font-body text-[13px] text-maroon";

export function Field({ label, error, required, hint, children, optionalText }) {
  return (
    <div className={fieldWrap}>
      <label className={labelCls}>
        {label}
        {required && <span className="text-maroon"> *</span>}
        {!required && optionalText && <span className="font-normal text-muted"> ({optionalText})</span>}
      </label>
      {children}
      {hint && !error && <span className="font-body text-[13px] text-muted" dir="ltr">{hint}</span>}
      {error && <span className={errorCls}>{error}</span>}
    </div>
  );
}

export function TextInput({ error, ...props }) {
  return <input className={`${controlCls} ${error ? "border-maroon" : ""}`} {...props} />;
}

export function TextArea({ error, ...props }) {
  return <textarea rows={4} className={`${controlCls} resize-y ${error ? "border-maroon" : ""}`} {...props} />;
}

export function Select({ error, children, ...props }) {
  return (
    <div className="relative">
      <select className={`${controlCls} ltr:pr-10 rtl:pl-10 ${error ? "border-maroon" : ""}`} {...props}>
        {children}
      </select>
      <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 text-muted ltr:right-4 rtl:left-4">▾</span>
    </div>
  );
}

// Warm success panel shown after a form submits.
export function SuccessPanel({ title, body, extra }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-sage/40 bg-sagetint p-8 text-center"
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream">
        <Check size={28} />
      </div>
      <h3 className="font-display text-2xl font-medium text-forest">{title}</h3>
      <p className="prose-col mx-auto mt-3 font-body text-[16px] text-ink/85">{body}</p>
      {extra}
    </motion.div>
  );
}

// Hidden anti-spam honeypot. Real users never see or fill it; bots often do.
// Render it inside every form; pass the value into the submit payload as `website`.
export function Honeypot({ value, onChange }) {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
      <label>
        Leave this field empty
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          name="website"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

// Pakistani phone validation: 03XX-XXXXXXX or 03XXXXXXXXX (11 digits) or +92...
export function validatePhone(value) {
  const cleaned = value.replace(/[\s-]/g, "");
  return /^(0)3\d{9}$/.test(cleaned) || /^(\+?92)3\d{9}$/.test(cleaned);
}

export function useFormState() {
  // status: "idle" | "submitting" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  return { status, setStatus, errors, setErrors };
}

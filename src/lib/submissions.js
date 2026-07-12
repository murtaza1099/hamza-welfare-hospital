// -----------------------------------------------------------------------------
// Form submission logic — ONE clean function per form.
//
// Each form POSTs to send.php on the same domain, which emails the hospital
// inbox. This is the correct setup for Hostinger web (PHP) hosting: no
// database, no login, no external service — submissions arrive as email.
//
// Returns { ok: true } on success or { ok: false } on failure.
// -----------------------------------------------------------------------------

// send.php lives next to index.html in public_html. In local `npm run dev`
// there is no PHP server, so submissions "succeed" in preview and log to the
// console instead of failing — see the preview branch below.
const ENDPOINT = "/send.php";
const isDev = import.meta.env.DEV;

async function post(type, data, lang) {
  const payload = { type, lang, ...data };

  if (isDev) {
    // Local development has no PHP — show the warm success state and log data.
    console.info(`[dev] ${type} submission (no PHP in dev):`, payload);
    await new Promise((r) => setTimeout(r, 500));
    return { ok: true, preview: true };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false };
    const json = await res.json().catch(() => ({ ok: true }));
    return { ok: json.ok !== false };
  } catch {
    return { ok: false };
  }
}

/** Appointment booking form → emails the hospital */
export function submitAppointment(data, lang) {
  return post("appointment", {
    full_name: data.fullName,
    phone: data.phone,
    service: data.service,
    preferred_day: data.day,
    preferred_shift: data.shift,
    note: data.note || "",
    website: data.website || "",
  }, lang);
}

/** Donation pledge form → emails the hospital (no payment processed) */
export function submitDonation(data, lang) {
  return post("donation", {
    full_name: data.fullName,
    phone: data.phone,
    email: data.email || "",
    country: data.country,
    donation_type: data.donationType,
    amount: data.amount || "",
    message: data.message || "",
    website: data.website || "",
  }, lang);
}

/** General contact inquiry form → emails the hospital */
export function submitInquiry(data, lang) {
  return post("inquiry", {
    full_name: data.fullName,
    phone: data.phone,
    message: data.message,
    website: data.website || "",
  }, lang);
}

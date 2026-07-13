// -----------------------------------------------------------------------------
// Form submission logic — sends form emails via Web3Forms (https://web3forms.com).
//
// Why Web3Forms: this site is deployed as a Node app on Hostinger, where PHP
// (send.php) does NOT run. Web3Forms is a free form-to-email service that works
// from any static/JS frontend — no backend, no PHP, no database. Each submission
// is emailed straight to the hospital inbox tied to the access key.
//
// SETUP (one-time, ~2 minutes):
//   1. Go to https://web3forms.com and enter the DONATIONS inbox
//      (donations@hamzawelfarehospital.com) to get a free Access Key. Paste it as
//      DONATIONS_KEY below.
//   2. Do it again with the GENERAL inbox (info@hamzawelfarehospital.com) to get a
//      second Access Key. Paste it as GENERAL_KEY below.
//   (You can use ONE key for both if you want everything in one inbox — just paste
//    the same key in both constants.)
//
// Returns { ok: true } on success or { ok: false } on failure.
// -----------------------------------------------------------------------------

// >>> PASTE YOUR WEB3FORMS ACCESS KEYS HERE <<<
const DONATIONS_KEY = "YOUR_DONATIONS_ACCESS_KEY"; // -> donations@hamzawelfarehospital.com
const GENERAL_KEY   = "YOUR_GENERAL_ACCESS_KEY";   // -> info@hamzawelfarehospital.com

const ENDPOINT = "https://api.web3forms.com/submit";
const isDev = import.meta.env.DEV;

async function post(accessKey, subject, fields, extra = {}) {
  // Honeypot: Web3Forms drops the submission if `botcheck` is truthy.
  const payload = {
    access_key: accessKey,
    subject,
    from_name: "Hamza Welfare Hospital Website",
    botcheck: extra.website ? true : "",
    ...fields,
  };

  if (isDev || !accessKey || accessKey.startsWith("YOUR_")) {
    // Local dev or key not set yet: show the success state and log the data.
    console.info(`[dev] submission (Web3Forms key not set):`, payload);
    await new Promise((r) => setTimeout(r, 500));
    return { ok: true, preview: true };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => ({}));
    return { ok: res.ok && json.success !== false };
  } catch {
    return { ok: false };
  }
}

/** Appointment booking form → info@hamzawelfarehospital.com */
export function submitAppointment(data, lang) {
  return post(
    GENERAL_KEY,
    `New Appointment Request — ${data.fullName}`,
    {
      form: "Appointment",
      language: lang,
      name: data.fullName,
      phone: data.phone,
      service: data.service,
      preferred_day: data.day,
      preferred_shift: data.shift,
      note: data.note || "",
    },
    { website: data.website }
  );
}

/** Donation pledge form → donations@hamzawelfarehospital.com (no payment processed) */
export function submitDonation(data, lang) {
  return post(
    DONATIONS_KEY,
    `New Donation Pledge — ${data.fullName}`,
    {
      form: "Donation",
      language: lang,
      name: data.fullName,
      phone: data.phone,
      email: data.email || "",
      country: data.country,
      donation_type: data.donationType,
      amount: data.amount || "",
      message: data.message || "",
    },
    { website: data.website }
  );
}

/** General contact inquiry form → info@hamzawelfarehospital.com */
export function submitInquiry(data, lang) {
  return post(
    GENERAL_KEY,
    `New Contact Inquiry — ${data.fullName}`,
    {
      form: "Contact",
      language: lang,
      name: data.fullName,
      phone: data.phone,
      message: data.message,
    },
    { website: data.website }
  );
}

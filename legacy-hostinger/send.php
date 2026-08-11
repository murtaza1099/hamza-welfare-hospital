<?php
/**
 * Hamza Welfare Hospital — form email handler (Hostinger web hosting).
 *
 * Receives JSON from the Appointment, Donation and Inquiry forms and emails
 * each submission to the hospital inbox. No database required.
 *
 * Security measures:
 *  - POST only, JSON only, request size capped
 *  - CRLF stripped from every value (email header-injection protection)
 *  - per-field length caps, output escaped in the plain-text body
 *  - hidden honeypot field ("website") silently drops bots
 *  - lightweight per-IP rate limit (max 5 submissions / 10 minutes)
 *  - server-side required-field + phone-format validation
 *
 * INBOX ROUTING (by form type):
 *   - Donation pledges      -> donations@hamzawelfarehospital.com
 *   - Appointment requests  -> info@hamzafoundationisb.org
 *   - Contact / inquiries   -> info@hamzafoundationisb.org
 *
 * The From address is a no-reply mailbox on the hospital's own domain
 * (no-reply@hamzawelfarehospital.com) so mail() is delivered reliably and
 * does not get flagged for spoofing. Reply-To is set to the routed inbox so
 * the team can reply straight to the sender's thread.
 */

// ---------------------------------------------------------------------------
// CONFIG — inbox per form type.
// ---------------------------------------------------------------------------
$INBOX = [
    "donation"    => "donations@hamzawelfarehospital.com",
    "appointment" => "info@hamzafoundationisb.org",
    "inquiry"     => "info@hamzafoundationisb.org",
];
$FROM = "no-reply@hamzawelfarehospital.com";       // mailbox on the sending domain
// ---------------------------------------------------------------------------

// Security response headers.
header("Content-Type: application/json; charset=utf-8");
header("X-Content-Type-Options: nosniff");
header("Referrer-Policy: same-origin");

function respond($ok, $code = 200, $error = null) {
    http_response_code($code);
    echo json_encode($error ? ["ok" => $ok, "error" => $error] : ["ok" => $ok]);
    exit;
}

// 1) Method + content-type.
if (($_SERVER["REQUEST_METHOD"] ?? "") !== "POST") respond(false, 405, "method");

// 2) Cap request body size (~16 KB is plenty for these forms).
$raw = file_get_contents("php://input", false, null, 0, 16384);
if ($raw === false || strlen($raw) === 0) respond(false, 400, "empty");

$data = json_decode($raw, true);
if (!is_array($data)) respond(false, 400, "bad_request");

// 3) Honeypot — pretend success so bots don't retry.
if (!empty($data["website"])) respond(true);

// 4) Lightweight per-IP rate limit.
$ip = $_SERVER["REMOTE_ADDR"] ?? "0.0.0.0";
$rlFile = sys_get_temp_dir() . "/hwh_rl_" . md5($ip);
$now = time();
$hits = [];
if (is_file($rlFile)) {
    $hits = @json_decode(@file_get_contents($rlFile), true) ?: [];
    $hits = array_filter($hits, fn($ts) => $ts > $now - 600); // last 10 min
}
if (count($hits) >= 5) respond(false, 429, "rate_limited");
$hits[] = $now;
@file_put_contents($rlFile, json_encode(array_values($hits)), LOCK_EX);

// Sanitize a single field: strip CR/LF (header-injection), trim, length-cap.
function field($data, $key, $max = 500) {
    $v = (string)($data[$key] ?? "");
    $v = str_replace(["\r", "\n", "\0"], " ", $v);
    $v = trim($v);
    if (strlen($v) > $max) $v = substr($v, 0, $max);
    return $v;
}

$type  = field($data, "type", 20);
$lang  = field($data, "lang", 5) === "ur" ? "ur" : "en";
$name  = field($data, "full_name", 120);
$phone = field($data, "phone", 30);

// 5) Required fields.
if ($name === "" || $phone === "") respond(false, 422, "missing_fields");

// 6) Server-side phone validation (Pakistani formats).
$digits = preg_replace('/[^0-9+]/', '', $phone);
if (!preg_match('/^(0|\+?92)3\d{9}$/', $digits)) respond(false, 422, "bad_phone");

// Build the email per form type.
$subject = "New submission";
$labels  = [];

if ($type === "appointment") {
    $subject = "New Appointment Request — $name";
    $labels = [
        "Name"            => $name,
        "Phone"           => $phone,
        "Service"         => field($data, "service", 60),
        "Preferred day"   => field($data, "preferred_day", 30),
        "Preferred shift" => field($data, "preferred_shift", 40),
        "Note"            => field($data, "note", 1000),
    ];
} elseif ($type === "donation") {
    $subject = "New Donation Pledge — $name";
    $labels = [
        "Name"            => $name,
        "Phone/WhatsApp"  => $phone,
        "Email"           => field($data, "email", 120),
        "Country"         => field($data, "country", 60),
        "Donation type"   => field($data, "donation_type", 30),
        "Intended amount" => field($data, "amount", 30),
        "Message"         => field($data, "message", 1000),
    ];
} elseif ($type === "inquiry") {
    $subject = "New Contact Inquiry — $name";
    $labels = [
        "Name"    => $name,
        "Phone"   => $phone,
        "Message" => field($data, "message", 1000),
    ];
} else {
    respond(false, 400, "unknown_type");
}

// Route to the correct inbox for this form type.
$TO = $INBOX[$type] ?? null;
if (!$TO) respond(false, 400, "unknown_type");

$sep  = str_repeat("-", 48);
$body  = "New submission from the Hamza Welfare Hospital website\n";
$body .= "Form: " . ucfirst($type) . "   |   Language: " . strtoupper($lang) . "\n$sep\n\n";
foreach ($labels as $k => $v) {
    $body .= $k . ": " . ($v !== "" ? $v : "—") . "\n";
}
$body .= "\n$sep\nReceived: " . date("D, d M Y H:i") . " (IP " . $ip . ")\n";

// Email headers — From/Reply-To are constants, not user input.
$headers  = "From: Hamza Welfare Hospital <$FROM>\r\n";
$headers .= "Reply-To: $TO\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$sent = @mail($TO, "=?UTF-8?B?" . base64_encode($subject) . "?=", $body, $headers);

respond((bool)$sent, $sent ? 200 : 500, $sent ? null : "mail_failed");

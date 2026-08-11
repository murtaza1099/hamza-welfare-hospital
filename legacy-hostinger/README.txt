Why send.php lives here instead of public/
==========================================

send.php was the original PHP form-mailer, used when the site ran on Hostinger
shared hosting. The site no longer uses it — forms now go through Web3Forms
(see src/lib/submissions.js), so this file is kept only for reference.

It was moved OUT of public/ because everything in public/ is copied verbatim
into dist/ by Vite, and therefore into whatever host serves the site.

On Vercel that is a problem: Vercel does not execute PHP. A .php file in the
output is served as a PLAIN TEXT FILE, meaning anyone visiting
/send.php would read your source code — including any mail configuration
inside it.

If you ever go back to PHP hosting, copy this file into public/ before
building, and point the forms at it again.

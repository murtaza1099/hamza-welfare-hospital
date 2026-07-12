# Hamza Welfare Hospital — Website

A bilingual (English / اردو) website for Hamza Welfare Hospital, Pind Begwal,
Simly Dam Road, Islamabad. Built with React + Vite + Tailwind CSS + Framer Motion.
Form submissions are emailed to the hospital inbox via a small PHP script —
designed to run on **Hostinger web hosting** with no database.

## Quick start (on your computer)

```bash
npm install      # install dependencies
npm run dev      # local preview at http://localhost:5173
npm run build    # produce the deployable site in /dist
```

In local dev there is no PHP, so submitting a form shows the success message and
logs the data to the browser console. Real emails only happen once it's on
Hostinger (or any PHP host).

## Adding your real photos & logo

Put your files in `public/images/` using the exact filenames listed in
`public/images/README.txt`. Most importantly:

- **`public/images/logo.png`** — your green Nastaliq logo. It is used in the
  header, footer, mobile menu, and as the browser tab icon automatically.
- Hero, patient collage, services, doctors and gallery photos — filenames are
  in that README. Until a file exists, a labelled placeholder holds its space
  so the layout never breaks.

## Deploying to Hostinger (step by step)

1. Set the recipient inbox: open `public/send.php` and change the `$TO` line to
   the email address that should receive submissions (currently
   `hasnaat_786@hotmail.com`). For best delivery, also create a mailbox on your
   domain in Hostinger (e.g. `no-reply@yourdomain`) — the script uses one for
   the "From" address automatically.
2. Run `npm run build`. This creates a `dist/` folder containing the whole site,
   including `send.php` and `.htaccess` (they are copied from `public/`).
3. In Hostinger's File Manager (or FTP), open **`public_html`** and upload the
   **contents of `dist/`** into it (index.html, the `assets/` folder, `images/`,
   `send.php`, `.htaccess`, favicon, etc.). Not the `dist` folder itself — its
   contents.
4. Visit your domain. The site is live. Submit a test form — the email should
   arrive at your `$TO` address within a minute.

If form emails don't arrive: check your spam folder first, then confirm PHP
`mail()` is enabled for your plan (it is on standard Hostinger shared hosting),
and that `$FROM` uses a mailbox on 
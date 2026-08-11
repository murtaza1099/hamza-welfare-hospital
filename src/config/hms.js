// ---------------------------------------------------------------------------
// Hospital Management System (HMS) link
// ---------------------------------------------------------------------------
// This is the ONLY place the HMS address is written down. The header "Login"
// button (desktop + mobile) reads from here, so changing this one line moves
// the button everywhere.
//
// Change HMS_URL to the real login page of your software, e.g.
//   "https://hms.hamzawelfare.techvisionsolvix.com/login"
//   "https://hamzawelfare.techvisionsolvix.com/hms/login"
//
export const HMS_URL = "https://hamzawelfare.techvisionsolvix.com/";

// Opens the software in a new tab so patients don't lose the hospital site.
// Set to false if you'd rather it replace the current tab.
export const HMS_NEW_TAB = true;

// Spread onto an <a> tag to apply the new-tab + security settings above.
export const hmsLinkProps = HMS_NEW_TAB
  ? { target: "_blank", rel: "noopener noreferrer" }
  : {};

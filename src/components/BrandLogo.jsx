import { useState } from "react";

// Displays the real logo from /public/images/logo.png everywhere.
// If the file is missing, falls back to a drawn green tent + line mark so the
// header/footer never look broken. `variant="light"` tints the fallback for
// dark (forest) backgrounds like the footer.
export default function BrandLogo({ className = "h-12 w-auto", variant = "dark" }) {
  const [errored, setErrored] = useState(false);
  const fill = variant === "light" ? "#FAF7F2" : "#0F5929";
  const accent = variant === "light" ? "#E7B7B7" : "#8C2323";

  if (errored) {
    return (
      <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Hamza Welfare Hospital logo">
        <path d="M32 9 L53 34 H11 Z" fill={fill} />
        <rect x="26" y="30" width="12" height="21" fill={fill} />
        <rect x="30" y="18" width="4" height="15" fill={variant === "light" ? "#0F5929" : "#FAF7F2"} />
        <rect x="24.5" y="23.5" width="15" height="4" fill={variant === "light" ? "#0F5929" : "#FAF7F2"} />
        <rect x="19" y="53" width="26" height="3" rx="1.5" fill={accent} />
      </svg>
    );
  }
  return (
    <img
      src="/images/logo.png"
      alt="Hamza Welfare Hospital logo"
      onError={() => setErrored(true)}
      className={className}
    />
  );
}

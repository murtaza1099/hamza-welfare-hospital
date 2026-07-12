import { useReducedMotion, motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

// -----------------------------------------------------------------------------
// ImageSlot — labelled placeholder that becomes a real image once a file with
// the given `src` name exists in /public/images. Keeps aspect ratio so uploading
// a real photo never breaks the layout.
// -----------------------------------------------------------------------------
export function ImageSlot({ src, alt, ratio = "4/3", caption, className = "", rounded = "rounded-xl", fill = false }) {
  const [errored, setErrored] = useState(false);
  const url = `/images/${src}`;

  return (
    <figure className={`${fill ? "h-full" : ""} ${className}`}>
      <div
        className={`relative overflow-hidden ${rounded} bg-sagetint border border-hair ${fill ? "h-full" : ""}`}
        style={fill ? undefined : { aspectRatio: ratio.replace("/", " / ") }}
      >
        {!errored ? (
          <img
            src={url}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setErrored(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-sage">
            <Camera size={26} strokeWidth={1.5} />
            <span className="font-body text-xs tracking-wide text-sage/90">{src}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 font-body text-[13px] italic text-muted">{caption}</figcaption>
      )}
    </figure>
  );
}

// Scroll reveal: fade + 30px rise, once, respects reduced motion.
export function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}

// Staggered container for revealing a group of children.
export function RevealGroup({ children, className = "", stagger = 0.08 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

// Eyebrow label
export function Eyebrow({ children, tone = "sage", className = "" }) {
  const color = tone === "maroon" ? "text-maroon" : "text-sage";
  return <p className={`eyebrow ${color} ${className}`}>{children}</p>;
}

// Editorial double-rule divider
export function DoubleRule({ className = "" }) {
  return <hr className={`rule-double my-0 ${className}`} aria-hidden="true" />;
}

// Buttons ---------------------------------------------------------------------
const base =
  "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full px-6 py-3 text-[15px] transition-all duration-200 focus-visible:outline";

export function DonateButton({ to = "/donate", children, className = "" }) {
  return (
    <Link
      to={to}
      className={`${base} bg-maroon text-cream hover:bg-maroon2 hover:-translate-y-0.5 shadow-sm ${className}`}
    >
      {children}
    </Link>
  );
}

export function PrimaryButton({ to, children, className = "", onClick, type }) {
  const cls = `${base} bg-forest text-cream hover:bg-forest2 hover:-translate-y-0.5 shadow-sm ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <button type={type || "button"} onClick={onClick} className={cls}>{children}</button>;
}

export function OutlineButton({ to, children, className = "", tone = "forest" }) {
  const color =
    tone === "cream"
      ? "border-cream/70 text-cream hover:bg-cream hover:text-forest"
      : "border-forest text-forest hover:bg-forest hover:text-cream";
  return (
    <Link to={to} className={`${base} border-2 bg-transparent hover:-translate-y-0.5 ${color} ${className}`}>
      {children}
    </Link>
  );
}

// Scroll to top on route change
export function useScrollTop(pathname) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
}

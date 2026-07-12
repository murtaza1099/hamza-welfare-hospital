import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Counts up to `value` when scrolled into view. Handles decimals (e.g. 3.6)
// and large numbers with thousands separators.
export default function CountUp({ value, prefix = "", suffix = "", duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const decimals = String(value).includes(".") ? 1 : 0;

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);

  const formatted =
    decimals === 1
      ? display.toFixed(1)
      : Math.round(display).toLocaleString("en-US");

  return (
    <span ref={ref} className="tnum">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLang } from "../context/LanguageContext";

// Thin green scroll-progress bar pinned to the very top.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  if (reduce) return null;
  return (
    <motion.div
      className="fixed left-0 top-0 z-[80] h-[2px] w-full origin-left bg-forest"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

// Floating WhatsApp button, present on every page.
export function WhatsAppFloat() {
  const { t } = useLang();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/923335115038"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.common.whatsapp} — 0333 5115038`}
      className={`fixed bottom-5 z-[75] flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-lift transition-all duration-300 hover:bg-forest2 hover:scale-105 ltr:right-5 rtl:left-5 ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <MessageCircle size={26} />
    </a>
  );
}

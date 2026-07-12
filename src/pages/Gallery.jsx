import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import PageHeader from "../components/PageHeader";
import { Reveal, DoubleRule } from "../components/ui";

// 12 gallery slots with a category and an aspect ratio for the masonry feel.
const items = [
  { src: "gallery-01.jpg", cat: "hospital", ratio: 1.3 },
  { src: "gallery-02.jpg", cat: "patients", ratio: 0.8 },
  { src: "gallery-03.jpg", cat: "hospital", ratio: 1 },
  { src: "gallery-04.jpg", cat: "events", ratio: 1.5 },
  { src: "gallery-05.jpg", cat: "patients", ratio: 1 },
  { src: "gallery-06.jpg", cat: "hospital", ratio: 0.75 },
  { src: "gallery-07.jpg", cat: "events", ratio: 1.3 },
  { src: "gallery-08.jpg", cat: "patients", ratio: 1.2 },
  { src: "gallery-09.jpg", cat: "hospital", ratio: 1 },
  { src: "gallery-10.jpg", cat: "events", ratio: 0.85 },
  { src: "gallery-11.jpg", cat: "patients", ratio: 1.4 },
  { src: "gallery-12.jpg", cat: "hospital", ratio: 1 },
];

function Tile({ item, onOpen }) {
  const [errored, setErrored] = useState(false);
  return (
    <button
      onClick={onOpen}
      className="mb-4 block w-full overflow-hidden rounded-xl border border-hair bg-sagetint focus-visible:outline"
      style={{ aspectRatio: `1 / ${item.ratio}` }}
      aria-label={`Open ${item.src}`}
    >
      {!errored ? (
        <img
          src={`/images/${item.src}`}
          alt={item.src}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <span className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-sage">
          <Camera size={22} strokeWidth={1.5} />
          <span className="font-body text-[11px]">{item.src}</span>
        </span>
      )}
    </button>
  );
}

function Lightbox({ list, index, setIndex, onClose }) {
  const { t } = useLang();
  const touchStartX = useRef(null);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + list.length) % list.length),
    [list.length, setIndex]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [go, onClose]);

  const current = list[index];

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/85 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      <button onClick={onClose} aria-label={t.galleryPage.close} className="absolute right-4 top-4 rounded-full bg-cream/15 p-2 text-cream hover:bg-cream/25">
        <X size={24} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); go(-1); }}
        aria-label={t.galleryPage.prev}
        className="absolute left-3 rounded-full bg-cream/15 p-2 text-cream hover:bg-cream/25 sm:left-6"
      >
        <ChevronLeft size={28} />
      </button>
      <div className="max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <ImageOrPlaceholder src={current.src} />
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); go(1); }}
        aria-label={t.galleryPage.next}
        className="absolute right-3 rounded-full bg-cream/15 p-2 text-cream hover:bg-cream/25 sm:right-6"
      >
        <ChevronRight size={28} />
      </button>
    </motion.div>
  );
}

function ImageOrPlaceholder({ src }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="flex h-[60vh] w-[80vw] max-w-[600px] flex-col items-center justify-center gap-2 rounded-xl bg-sage/30 text-cream">
        <Camera size={32} />
        <span className="font-body text-sm">{src}</span>
      </div>
    );
  }
  return (
    <img
      src={`/images/${src}`}
      alt={src}
      onError={() => setErrored(true)}
      className="max-h-[85vh] w-auto rounded-lg object-contain"
    />
  );
}

export default function Gallery() {
  const { t, lang } = useLang();
  const g = t.galleryPage;
  useSeo(t.seo.galleryTitle, t.seo.galleryDesc);

  const filters = [
    { key: "all", label: g.filterAll },
    { key: "hospital", label: g.filterHospital },
    { key: "patients", label: g.filterPatients },
    { key: "events", label: g.filterEvents },
  ];
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(-1);

  const visible = filter === "all" ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      <PageHeader eyebrow={g.eyebrow} title={g.title} intro={g.intro} />
      <DoubleRule />

      <section className="grain bg-cream">
        <div className="mx-auto max-w-[1200px] px-5 py-section">
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-4 py-2 font-body text-[14px] font-semibold transition-colors ${
                  filter === f.key ? "bg-forest text-cream" : "border border-hair text-ink/80 hover:border-sage"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Masonry via CSS columns */}
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
            {visible.map((item, i) => (
              <div key={item.src} className="break-inside-avoid">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                >
                  <Tile item={item} onOpen={() => setLightbox(i)} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox >= 0 && (
          <Lightbox list={visible} index={lightbox} setIndex={setLightbox} onClose={() => setLightbox(-1)} />
        )}
      </AnimatePresence>
    </>
  );
}

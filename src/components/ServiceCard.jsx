import { useState } from "react";
import { useLang } from "../context/LanguageContext";

// A service card: real photo on top, then title + description.
// Falls back to a sage placeholder (with the slot name) until the photo exists.
export default function ServiceCard({ item }) {
  const { t } = useLang();
  const { key, image } = item;
  const [errored, setErrored] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hair bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-sagetint">
        {!errored ? (
          <img
            src={`/images/${image}`}
            alt={`${t.services[key].title} at Hamza Welfare Hospital`}
            loading="lazy"
            decoding="async"
            onError={() => setErrored(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sage">
            <span className="font-body text-xs">{image}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
        <h3 className="font-display text-[19px] font-medium text-ink">{t.services[key].title}</h3>
        <p className="mt-2 font-body text-[14.5px] leading-relaxed text-muted">{t.services[key].desc}</p>
      </div>
    </article>
  );
}

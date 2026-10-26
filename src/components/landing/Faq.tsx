import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/**
 * Вопросы и ответы с плавной анимацией раскрытия
 */
export function Faq() {
  const f = site.faq;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#0E0E0E] py-20 md:py-28">
      <div className="container-rail">
        <div className="text-center mb-12 md:mb-14">
          <div className="eyebrow mb-3 text-[var(--brand)]">Коротко о главном</div>
          <h2 className="h1">{f.title}</h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-white/[0.08] rounded-3xl border border-white/[0.08] bg-white/[0.02] px-6 md:px-8">
          {f.items.map((item, i) => (
            <div key={item.q} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 text-left font-display text-[17px] font-semibold text-white/94 transition-colors hover:text-white md:text-lg"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--brand)] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-[15px] leading-relaxed text-white/83 md:text-base">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

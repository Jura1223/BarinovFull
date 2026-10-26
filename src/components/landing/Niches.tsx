import { motion } from "framer-motion";
import { site } from "@/content/site";

/** «Работаю с разными нишами»: стеклянная карточка с плавающим оранжевым свечением. */
export function Niches() {
  const n = site.niches;
  return (
    <section className="bg-[#0E0E0E] pb-16 md:pb-28">
      <div className="container-rail">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.7 }}
          className="glass relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[var(--brand)]/30 px-6 py-10 text-center md:px-12 md:py-14"
        >
          <div className="niche-orb niche-orb-a" aria-hidden />
          <div className="niche-orb niche-orb-b" aria-hidden />
          <div className="relative">
            <h3 className="h2">{n.title}</h3>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/90 md:text-lg">{n.subtitle}</p>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/85 md:text-base">{n.fromScratch}</p>
            <ul className="mt-7 flex flex-wrap justify-center gap-2">
              {n.chips.map((c) => (
                <li key={c} className="rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 text-[14px] font-medium text-white/92 backdrop-blur md:text-[15px]">
                  {c}
                </li>
              ))}
              <li className="px-2 py-1.5 text-[14px] text-white/70 md:text-[15px]">{n.outro}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

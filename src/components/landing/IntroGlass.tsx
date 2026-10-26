import { motion } from "framer-motion";
import { site } from "@/content/site";

export function IntroGlass() {
  const intro = site.intro;
  return (
    <section id="about" className="relative bg-[#0E0E0E] py-16 md:py-20">
      <div className="container-rail">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto max-w-6xl glass rounded-[19px] overflow-hidden border border-[var(--brand)]/30 px-5 py-5 md:px-9 md:py-7"
        >
          <div className="niche-orb niche-orb-a" aria-hidden />
          <div className="niche-orb niche-orb-b" aria-hidden />

          <div className="relative">
            <div className="font-display text-[15px] md:text-[19px] leading-[1.55] text-white/94 tracking-tight">
              {intro.lines.map((l, i) => (
                <p key={i} className={i === 0 ? "" : "mt-1.5"}>
                  {l}
                </p>
              ))}
            </div>

            <div className="mt-10 h-px w-16 bg-[var(--brand)]/50" />

            <p className="mt-4 max-w-5xl text-[15px] md:text-[19px] leading-[1.6] text-white/88">
              {intro.accent}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

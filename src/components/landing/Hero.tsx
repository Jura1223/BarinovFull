import { motion } from "framer-motion";
import { Send, Clapperboard, Eye, Star } from "lucide-react";
import { site } from "@/content/site";

const iconMap = {
  clapperboard: Clapperboard,
  eye: Eye,
  star: Star,
};

export function Hero() {
  const h = site.hero;
  return (
    <section className="relative overflow-hidden bg-black pt-28 pb-16 md:pt-44 md:pb-28">
      <div className="noise" aria-hidden />

      <div className="container-rail grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 relative z-10">
          <div className="flex items-center justify-between gap-1 lg:block">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="h-display min-w-0"
            >
              {h.titleLine1}
              <br />
              <span className="text-[var(--brand)] glow-text">{h.titleAccent}</span>
              <br />
              <span className="text-white/95">{h.titleLine2}</span>
            </motion.h1>
            <img
              src="/images/site/portrait-circle.webp"
              alt="Юрий Баринов, контент-продюсер"
              width={146}
              height={146}
              fetchPriority="high"
              decoding="async"
              className="h-[146px] w-[146px] shrink-0 rounded-full border-2 border-[var(--brand)] object-cover shadow-[var(--shadow-glow-md)] sm:h-32 sm:w-32 lg:hidden"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/83 my-0 py-0"
          >
            {h.subLine1}
            <br />
            {h.subLine2}
            <br />
            {h.subLine3}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <a
              href={site.cta.href}
              className="group inline-flex items-center gap-3 rounded-2xl bg-[var(--brand)] px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-glow-md)] transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow-lg)]"
            >
              <Send className="h-5 w-5" />
              {site.cta.label}
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-14 inline-flex flex-wrap items-center gap-x-10 gap-y-6 rounded-2xl border border-white/10 bg-[#0E0E0E] px-8 py-5"
          >
            {h.metrics.map((m) => {
              const Icon = iconMap[m.icon as keyof typeof iconMap];
              return (
                <div key={m.label} className="flex items-center gap-4">
                  <Icon className="h-7 w-7 text-[var(--brand)]" strokeWidth={1.5} />
                  <div>
                    <div className="font-display text-2xl font-bold text-[var(--brand)] leading-none">{m.value}</div>
                    <div className="mt-1.5 text-[12px] text-white/76">{m.label}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="hidden lg:block lg:col-span-5 relative lg:-ml-32 xl:-ml-48 lg:-mt-32 xl:-mt-40 pointer-events-none"
        >
          <div className="absolute inset-0 -z-10 rounded-full opacity-80 blur-3xl"
               style={{ background: "var(--gradient-radial-glow)" }} />
          <div className="relative aspect-[4/5] w-full max-w-[640px] mx-auto lg:scale-110 origin-center">
            <img
              src={h.image}
              alt="Юрий Баринов, контент-продюсер и режиссёр монтажа"
              width={956}
              height={915}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

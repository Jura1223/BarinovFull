import { motion } from "framer-motion";

export function CinematicBreak({ text, sub }: { text: string; sub?: string }) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0E0E0E] py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
             style={{ background: "radial-gradient(closest-side, rgba(255,106,0,0.25), transparent 70%)" }} />
      </div>
      <div className="noise" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.9 }}
        className="container-rail text-center"
      >
        <h2 className="font-display font-semibold tracking-[-0.035em] leading-[1.05] text-white text-[clamp(2.25rem,5.5vw,5rem)] max-w-5xl mx-auto whitespace-pre-line">
          {text}
        </h2>
        {sub && (
          <p className="mt-8 text-base md:text-lg text-white/76 max-w-xl mx-auto whitespace-pre-line">{sub}</p>
        )}
      </motion.div>
    </section>
  );
}

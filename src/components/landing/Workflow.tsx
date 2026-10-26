import { motion } from "framer-motion";
import { site } from "@/content/site";

export function Workflow() {
  return (
    <section className="bg-[#0E0E0E] py-24 md:py-32">
      <div className="container-rail">
        <div className="text-center mb-16 md:mb-24">
          <div className="eyebrow mb-4">Процесс</div>
          <h2 className="h1">Как строится работа</h2>
          <p className="mt-4 text-white/80 text-base">(на продюсировании)</p>
          
          <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[var(--brand)] max-w-2xl mx-auto">
            Я не работаю как студии, где одновременно берут по 50 проектов потоками. Мне суперски нравится погружаться в эксперта, подачу и из этого выстраивать контент.
          </p>
          <p className="mt-3 text-[17px] md:text-lg leading-relaxed text-white/90 max-w-xl mx-auto">
            Поэтому я работаю только с ограниченным количеством проектов.
          </p>
        </div>

        <div className="relative">
          {/* progress line */}
          <div className="hidden md:block absolute left-0 right-0 top-[28px] h-px bg-white/[0.08]" />
          <div className="hidden md:block absolute left-0 top-[28px] h-px w-full bg-[var(--brand)]/35 blur-[2px]" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {site.workflow.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-[#0E0E0E]">
                  <span className="font-display text-sm font-semibold text-[var(--brand)]">{s.n}</span>
                  <div className="absolute inset-0 rounded-full blur-md opacity-60"
                       style={{ background: "radial-gradient(closest-side, rgba(255,106,0,0.4), transparent)" }} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white md:text-lg">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-white/80 md:text-sm md:text-white/76 md:max-w-[240px]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mt-16 text-center text-sm text-white/68">{site.workflowNote}</p>
      </div>
    </section>
  );
}

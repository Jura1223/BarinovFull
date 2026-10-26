import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { CountUp } from "@/components/ui/CountUp";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function NewestCase() {
  const c = site.newestCase;
  return (
    <section id="cases" className="py-20 md:py-32">
      <div className="container-rail">
        <div className="text-center mb-10 md:mb-12">
          <div className="eyebrow mb-3 text-[var(--brand)]">Результаты клиентов</div>
          <h2 className="h1">Кейсы</h2>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-6%" }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-5 md:p-12 overflow-hidden border border-[var(--brand)]/35"
        >
          <div
            className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
            style={{ background: "var(--gradient-radial-glow)" }}
            aria-hidden
          />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Слева: кто это */}
            <div className="lg:col-span-4">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/50 bg-[var(--brand)]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--brand)]">
                Кейс №1 · новый
              </div>
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{c.name}</h3>
              <p className="mt-2 text-sm text-white/90">{c.role}</p>

              <div className="mt-6 aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl border border-white/15 bg-[#141414]">
                {c.photo ? (
                  <img
                    src={c.photo}
                    alt={`${c.name}, ${c.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-[50%_20%]"
                  />
                ) : (
                  <div
                    className="grid h-full w-full place-items-center"
                    style={{
                      background:
                        "radial-gradient(70% 60% at 50% 35%, oklch(0.72 0.19 47 / 0.28), transparent 70%), linear-gradient(180deg, #181818, #0e0e0e)",
                    }}
                    aria-hidden
                  >
                    <span className="font-display text-7xl font-bold text-[var(--brand)]/80">{initials(c.name)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Справа: цифры, что сделали, результат */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                {c.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-white/[0.12] bg-black/30 p-4 md:p-5">
                    <div className="font-display text-4xl font-bold leading-none text-[var(--brand)] glow-text md:text-5xl">
                      <CountUp to={m.to} prefix={m.prefix} suffix={m.suffix} />
                    </div>
                    <div className="mt-3 text-[13px] leading-snug text-white/90 md:text-sm">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="eyebrow mb-4">Что сделали</div>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
                  {c.done.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-[15px] leading-snug text-white md:text-base">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--brand)]/35 bg-[var(--brand)]/[0.07] p-5">
                <div className="eyebrow mb-2 text-[var(--brand)]">Результат</div>
                <p className="text-[15px] leading-relaxed text-white md:text-base">{c.result}</p>
              </div>
            </div>

            {/* Коллабы на всю ширину - временно скрыто */}
            {/* {"collabs" in c && c.collabs && c.collabs.length > 0 && (
              <div className="lg:col-span-12">
                <div className="eyebrow mb-4">Коллабы</div>
                <ul className="flex flex-wrap gap-2.5">
                  {c.collabs.map((n: string) => (
                    <li
                      key={n}
                      className="rounded-full border border-[var(--brand)]/40 bg-white/[0.04] px-4 py-2 font-display text-base font-semibold text-white md:text-lg"
                    >
                      {n}
                    </li>
                  ))}
                  <li className="rounded-full border border-white/15 px-4 py-2 text-base text-white/90 md:text-lg">и другие</li>
                </ul>
                <div className="mt-5 grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-4">
                  {("collabPhotos" in c) && c.collabPhotos.map((src: string, i: number) => (
                    <div key={src} className="overflow-hidden rounded-2xl border border-white/15 bg-[#141414]">
                      <img
                        src={src}
                        alt={`Кадр со съёмок: коллаб Виталия Гогунского ${i + 1}`}
                        loading="lazy"
                        className="aspect-[4/3] h-full w-full object-cover object-[50%_25%]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )} */}

            <div className="lg:col-span-12">
              <div className="eyebrow mb-3">Посмотреть работы</div>
              <ul className="flex flex-wrap gap-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--brand)]/50 bg-[var(--brand)]/10 px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-[var(--brand)] hover:text-black"
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 text-[var(--brand)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

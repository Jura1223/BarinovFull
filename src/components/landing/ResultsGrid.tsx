import { motion } from "framer-motion";
import { Check, ArrowUpRight, Home } from "lucide-react";
import { site, type Bullet, type ResultItem } from "@/content/site";
import { CountUp } from "@/components/ui/CountUp";
import { VideoThumb } from "@/components/ui/VideoThumb";

function initials(name: string) {
  return name
    .replace(/[«»]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Metric({ item }: { item: ResultItem }) {
  if (item.count) {
    const c = item.count;
    return (
      <div className="font-display text-5xl font-bold leading-none text-[var(--brand)] glow-text">
        <CountUp to={c.to} decimals={c.decimals ?? 0} suffix={c.suffix ?? ""} />
      </div>
    );
  }
  return <div className="font-display text-3xl font-bold leading-tight text-[var(--brand)] glow-text">{item.text}</div>;
}

function BulletText({ b }: { b: Bullet }) {
  if (typeof b === "string") return <>{b}</>;
  return (
    <>
      {b.map((part, i) => {
        if (part.href) {
          return (
            <a
              key={i}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--brand)] underline decoration-[var(--brand)]/40 underline-offset-4 hover:decoration-[var(--brand)]"
            >
              {part.t}
            </a>
          );
        }
        return part.hl ? (
          <span key={i} className="font-semibold text-[var(--brand)]">
            {part.t}
          </span>
        ) : (
          <span key={i}>{part.t}</span>
        );
      })}
    </>
  );
}

export function ResultsGrid() {
  const r = site.results;
  return (
    <section className="bg-[#0E0E0E] pb-16 md:pb-28">
      <div className="container-rail">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="h2">{r.title}</h3>
        </div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {r.items.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group glass flex flex-col rounded-3xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--brand)]/60 md:p-7"
            >
              <div className="flex items-center gap-3.5">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/20 bg-[#141414]">
                  {item.photo ? (
                    <img src={item.photo} alt={item.name} loading="lazy" className={`h-full w-full object-cover ${(item as any).photoClass || ""}`} />
                  ) : (
                    <div
                      className={`grid h-full w-full place-items-center font-display font-bold text-[var(--brand)] ${item.avatar && item.avatar.length === 2 && !/\p{Extended_Pictographic}/u.test(item.avatar) ? "text-lg" : "text-2xl"}`}
                      style={{ background: "radial-gradient(70% 70% at 50% 35%, oklch(0.72 0.19 47 / 0.3), #0e0e0e 75%)" }}
                      aria-hidden
                    >
                      {item.avatarIcon === "home" ? <Home className="h-6 w-6 text-[var(--brand)]" strokeWidth={1.8} /> : <span className={item.avatarClass}>{item.avatar ?? initials(item.name)}</span>}
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-xl font-bold leading-tight">{item.name}</h4>
                  <p className="mt-0.5 text-[13px] leading-snug text-white/88">{item.role}</p>
                </div>
              </div>

              <div className="mt-6 flex min-h-[3.25rem] items-center justify-between gap-3">
                <Metric item={item} />
                {item.sideStat && (
                  <img src={item.sideStat.src} alt={item.sideStat.alt} loading="lazy" className="h-auto w-[50%] max-w-[210px] shrink-0 rounded-xl border border-white/20" />
                )}
              </div>
              <p className="mt-2 text-sm text-white/90">{item.caption}</p>

              <ul className="mt-5 space-y-2.5 border-t border-white/[0.1] pt-5">
                {item.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-white/94">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                    <span>
                      <BulletText b={b} />
                    </span>
                  </li>
                ))}
              </ul>

              {item.extra && (
                <figure className="mt-5 flex items-center gap-4">
                  <img src={item.extra.src} alt={item.extra.alt} loading="lazy" className="h-auto w-[28%] max-w-[110px] shrink-0 rounded-xl border border-white/20" />
                  <figcaption className="text-[13.5px] leading-snug text-white/85">{item.extra.caption}</figcaption>
                </figure>
              )}

              {item.videos && (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {item.videos.map((v) => (
                    <VideoThumb
                      key={v.href}
                      image={v.thumb}
                      alt={`${item.name}: ${v.label}`}
                      href={v.href}
                      className="aspect-video w-full"
                      playSize="sm"
                      caption={v.label}
                    />
                  ))}
                </div>
              )}

              {item.preview && (
                <div className="mt-5 overflow-hidden rounded-2xl border border-white/20">
                  {item.preview.href ? (
                    <a href={item.preview.href} target="_blank" rel="noopener noreferrer">
                      <img src={item.preview.src} alt={item.preview.alt} loading="lazy" className="mx-auto max-h-[420px] w-auto object-contain" />
                    </a>
                  ) : (
                    <img src={item.preview.src} alt={item.preview.alt} loading="lazy" className="mx-auto max-h-[420px] w-auto object-contain" />
                  )}
                </div>
              )}

              {item.statsImage && (
                <a
                  href={item.statsImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block overflow-hidden rounded-2xl border border-white/20"
                  aria-label={`Открыть статистику: ${item.name}`}
                >
                  <img src={item.statsImage.src} alt={item.statsImage.alt} loading="lazy" className="w-full object-contain" />
                </a>
              )}

              {item.links && (
                <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                  {item.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand)]/50 px-3.5 py-2 text-[13.5px] font-medium text-white transition-colors hover:bg-[var(--brand)] hover:text-black"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

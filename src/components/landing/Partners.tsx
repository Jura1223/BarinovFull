import { motion } from "framer-motion";
import { site, type AlsoItem } from "@/content/site";

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

type Person = (typeof site.people)[number];

export function PersonCard({ p, index = 0 }: { p: Person; index?: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/15 bg-[#141414] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[var(--brand)]/60 group-hover:shadow-[var(--shadow-glow-md)]">
        {(p as { href?: string }).href && (
          <a
            href={(p as { href?: string }).href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Открыть профиль: ${p.name}`}
            className="absolute inset-0 z-10"
          />
        )}
        {p.photo ? (
          <img
            src={p.photo}
            alt={`${p.name}, ${p.role}`}
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${(p as { photoClass?: string }).photoClass ?? "object-[50%_25%]"}`}
          />
        ) : (
          <div
            className="absolute inset-0 grid place-items-center"
            style={{
              background:
                "radial-gradient(70% 60% at 50% 35%, oklch(0.72 0.19 47 / 0.28), transparent 70%), linear-gradient(180deg, #181818, #0e0e0e)",
            }}
            aria-hidden
          >
            <span className="font-display text-6xl font-bold text-[var(--brand)]/80 md:text-7xl">{initials(p.name)}</span>
          </div>
        )}
        <div
          className={`absolute inset-x-0 p-3.5 md:p-5 ${
            (p as { noteTop?: boolean }).noteTop
              ? "top-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent pb-10"
              : "bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-10 md:pt-10"
          }`}
        >
          {(p as { hideText?: boolean }).hideText ? (
            <h3 className="sr-only">{p.name}</h3>
          ) : (
            <>
              <h3 className="font-display text-[15px] font-bold leading-tight md:text-xl">{p.name}</h3>
              <p className="mt-1 text-[12.5px] leading-snug text-white/90 md:mt-1 md:text-[13px]">{p.role}</p>
            </>
          )}
          <p className={`mt-2 inline-block rounded-full ${(p as { hideNote?: boolean }).hideNote ? "sr-only" : ""}  border border-[var(--brand)]/50 bg-[var(--brand)]/15 px-2.5 py-1 text-[11.5px] font-medium leading-tight text-[var(--brand)] md:mt-2 md:px-3 md:text-xs`}>
            {Array.isArray(p.note) ? p.note.join(", ") : p.note}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

function AlsoChip({ item }: { item: AlsoItem }) {
  const content = (
    <>
      {item.logo && <img src={item.logo} alt={item.logoOnly ? item.name : ""} className="h-5 w-auto shrink-0 md:h-6" loading="lazy" />}
      {!item.logoOnly && <span>{item.name}</span>}
    </>
  );
  const cls =
    "inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 font-display text-[16px] font-semibold text-white/94 md:text-lg";
  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cls} transition-colors hover:border-[var(--brand)]/60 hover:text-white`}
      >
        {content}
      </a>
    );
  }
  return <span className={cls}>{content}</span>;
}

export function Partners() {
  const w = site.alsoWorked;
  return (
    <section id="clients" className="relative bg-[#0E0E0E] py-16 md:py-28 border-y border-white/[0.06]">
      <div className="container-rail">
        <div className="text-center mb-10 md:mb-14">
          <div className="eyebrow mb-3 text-[var(--brand)]">Кому я делаю контент</div>
          <h2 className="h1">С кем я работал</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] text-white/90 md:text-base">
            Эксперты, блогеры, телеканалы и бренды. Ниже те, с кем работаю дольше всего и с кем получились самые заметные результаты.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {site.people.map((p, i) => (
            <PersonCard key={p.name} p={p} index={i} />
          ))}
        </ul>

        <div className="mt-14 md:mt-20">
          <h3 className="text-center font-display text-2xl font-bold md:text-3xl">{w.title}</h3>
          <div className="mt-8 grid grid-cols-1 gap-9 text-center md:mt-10 lg:grid-cols-3 lg:gap-8">
            {w.groups.map((g) => (
              <div key={g.title}>
                <div className="eyebrow mb-4 text-[var(--brand)]">{g.title}</div>
                <ul className="flex flex-wrap justify-center gap-2.5">
                  {g.items.map((item) => (
                    <li key={item.name}>
                      <AlsoChip item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-white/92 md:text-xl">{w.international}</p>
        </div>
      </div>
    </section>
  );
}

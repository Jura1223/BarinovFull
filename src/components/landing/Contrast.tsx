import { X, Check } from "lucide-react";
import { site } from "@/content/site";

export function Contrast() {
  const { cold, warm, title, result } = site.contrast;
  return (
    <section className="bg-[#0E0E0E] py-20 md:py-28">
      <div className="container-rail">
        <h2 className="h2 max-w-3xl">{title}</h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Cold */}
          <div className="rounded-3xl border border-white/[0.07] bg-[#0E0E0E] p-8">
            <div className="eyebrow mb-6 text-white/72">{cold.title}</div>
            <ul className="space-y-3">
              {cold.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-[15px] text-white/76">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full border border-red-500/50">
                    <X className="h-3 w-3 text-red-500" />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warm */}
          <div className="relative rounded-3xl border border-[var(--brand)]/25 bg-[#0E0E0E] p-8 overflow-hidden">
            <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
                 style={{ background: "var(--gradient-radial-glow)" }} />
            <div className="eyebrow mb-6 text-[var(--brand)]">{warm.title}</div>
            <ul className="space-y-3 relative">
              {warm.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-[15px] text-white/92">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--brand)]/20 border border-[var(--brand)]/40">
                    <Check className="h-3 w-3 text-[var(--brand)]" />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-sm md:text-base leading-relaxed text-white/88">
          {result}
        </p>
      </div>
    </section>
  );
}

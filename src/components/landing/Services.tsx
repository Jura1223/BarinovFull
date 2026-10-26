import { Check } from "lucide-react";
import { site } from "@/content/site";

export function Services() {
  const { left, right } = site.services;
  return (
    <section id="services" className="bg-[#0E0E0E] pt-12 pb-28 md:pt-16 md:pb-40">
      <div className="container-rail">
        {/* Heading with arrows */}
        <div className="relative mb-16 md:mb-24 flex flex-col items-center">
          <div className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[var(--brand)] glow-text text-center">
            Чем занимаюсь
          </div>

          {/* Arrows */}
          <svg
            className="hidden md:block absolute left-0 right-0 top-full mt-2 w-full h-14 pointer-events-none"
            viewBox="0 0 1200 70"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <marker id="arrowL" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="hsl(var(--brand-hsl, 18 95% 55%))" />
              </marker>
              <marker id="arrowR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="hsl(var(--brand-hsl, 18 95% 55%))" />
              </marker>
            </defs>
            <path
              d="M 560 0 C 500 25, 430 45, 340 62"
              stroke="var(--brand)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              markerEnd="url(#arrowL)"
              opacity="0.85"
            />
            <path
              d="M 640 0 C 700 25, 770 45, 860 62"
              stroke="var(--brand)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              markerEnd="url(#arrowR)"
              opacity="0.85"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 md:mt-16">
        {[left, right].map((col) => (
          <div key={col.title}>
            <h2 className="h2 max-w-md">{col.title}</h2>
            <ul className="mt-10 space-y-px">
              {col.items.map((it) => (
                <li
                  key={it}
                  className="group flex items-center gap-3 border-t border-white/[0.07] py-4 text-[22px] text-white/90 transition-colors hover:text-white"
                >
                  <Check className="h-5 w-5 text-[var(--brand)]/70 transition-transform group-hover:scale-110 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
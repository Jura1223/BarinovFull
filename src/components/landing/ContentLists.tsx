import { Check } from "lucide-react";
import { site } from "@/content/site";

export function ContentLists() {
  return (
    <section className="bg-[#0E0E0E] py-20 md:py-28">
      <div className="container-rail">
        <h2 className="h2 max-w-3xl">{site.contentLists.title}</h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ul className="lg:col-span-7 space-y-px">
            {site.contentLists.items.map((it) => (
              <li
                key={it}
                className="flex items-start gap-3 border-t border-white/[0.07] py-4 text-[15px] text-white/90"
              >
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--brand)]/15 border border-[var(--brand)]/30">
                  <Check className="h-3 w-3 text-[var(--brand)]" />
                </span>
                <span>{it}</span>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-5 relative order-first grid place-items-center lg:order-none lg:min-h-[260px]">
            <div className="absolute inset-0 -z-10 rounded-full opacity-50 blur-3xl"
                 style={{ background: "var(--gradient-radial-glow)" }} />
            <div className="relative aspect-square w-full max-w-[9.5rem] sm:max-w-[12rem] lg:aspect-[4/5] lg:max-w-[24rem] rounded-full border-2 border-[var(--brand)] shadow-[var(--shadow-glow-md)] overflow-hidden lg:rounded-3xl">
              <img
                src="/images/site/portrait-cta.webp"
                alt="Юра Баринов, контент-продюсер"
                width={878}
                height={1195}
                loading="lazy"
                className="h-full w-full object-cover object-[50%_15%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

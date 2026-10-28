import { Send } from "lucide-react";
import { site } from "@/content/site";
import { ContactIcons } from "@/components/ui/ContactIcons";

export function FinalCTA() {
  const c = site.finalCta;
  return (
    <section id="contact" className="relative bg-[#0E0E0E] py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-20%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
             style={{ background: "var(--gradient-radial-glow)" }} />
      </div>

      <div className="container-rail">
        <div className="mx-auto max-w-4xl glass rounded-3xl overflow-hidden p-6 md:p-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="md:col-span-4 relative order-first md:order-last">
              <div className="relative aspect-square w-full max-w-[160px] md:max-w-[200px] mx-auto overflow-hidden rounded-2xl border border-white/15">
                <img src={c.image} alt="Юрий Баринов, контент-продюсер" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/25" />
              </div>
            </div>

            <div className="md:col-span-8 text-center md:text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight md:max-w-xl">
                {c.title}
              </h2>
              <p className="mt-3 text-white/90 text-[15px] md:max-w-md">{c.sub}</p>

              <a
                href={site.cta.href}
                className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-[var(--brand)] px-7 py-3.5 text-[15px] font-semibold text-black shadow-[var(--shadow-glow-md)] transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow-lg)]"
              >
                <Send className="h-4 w-4" />
                {c.button}
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10 pb-24 md:pb-10">
      <div className="container-rail flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded bg-[var(--brand)] text-[11px] font-bold text-black">YB</span>
          <span className="font-display text-[15px] font-semibold tracking-wide">{site.brand.name}</span>
        </div>
        <ContactIcons />
        <p className="text-xs text-white/83" suppressHydrationWarning>
          © {new Date().getFullYear()} Юрий Баринов · контент-продюсер
        </p>
      </div>
    </footer>
  );
}

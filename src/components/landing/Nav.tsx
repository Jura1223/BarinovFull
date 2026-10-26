import { Send, Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-black/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/15 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)]" : "bg-transparent"
      }`}
    >
      <div className="container-rail flex h-16 items-center justify-between gap-3">
        <a href="#" className="flex items-center" onClick={() => setOpen(false)}>
          <div>
            <div className="font-display text-[19px] font-bold leading-tight tracking-wide text-white sm:text-[24px]">{site.brand.name}</div>
            <div className="text-[14px] leading-tight text-[var(--brand)] sm:text-[18px]">{site.brand.tagline}</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Разделы сайта">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[17px] text-white/90 transition-colors hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.cta.href}
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--brand)] bg-black px-3.5 py-2 text-[15px] font-medium text-white shadow-[0_0_22px_-8px_var(--brand)] transition-all hover:bg-[var(--brand)]/15 hover:shadow-[0_0_28px_-6px_var(--brand)] sm:px-4 sm:text-[17px]"
          >
            <Send className="h-4 w-4 text-[var(--brand)]" />
            <span className="sm:hidden">Telegram</span>
            <span className="hidden sm:inline">{site.cta.label}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-black/75 backdrop-blur-xl md:hidden" aria-label="Разделы сайта">
          <ul className="container-rail py-2">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/[0.06] py-4 text-lg text-white/94 last:border-0"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

/** Липкая кнопка «Написать в Telegram» внизу экрана, только на телефоне. Прячется у блока «Связаться». */
export function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const el = document.getElementById("contact");
    let io: IntersectionObserver | undefined;
    if (el) {
      io = new IntersectionObserver(([e]) => setAtContact(e.isIntersecting), { threshold: 0.15 });
      io.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const visible = pastHero && !atContact;
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-6 transition-all duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ background: "linear-gradient(to top, rgba(14,14,14,0.95) 55%, transparent)" }}
    >
      <a
        href={site.cta.href}
        tabIndex={visible ? 0 : -1}
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[var(--brand)] py-3.5 text-[16px] font-semibold text-black shadow-[var(--shadow-glow-md)]"
      >
        <Send className="h-5 w-5" />
        Написать в Telegram
      </a>
    </div>
  );
}

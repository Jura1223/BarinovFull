import { Mail, Send } from "lucide-react";
import { site } from "@/content/site";
import { telegramPath, vkPath } from "@/components/ui/brand-icons";

function BrandSvg({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d={d} />
    </svg>
  );
}

/** Ряд круглых иконок-ссылок: Telegram, VK, почта, канал с работами, Kwork. */
export function ContactIcons({ className = "" }: { className?: string }) {
  const k = site.contacts;
  const items = [
    { label: "Telegram", href: k.telegram, icon: <BrandSvg d={telegramPath} /> },
    { label: "ВКонтакте", href: k.vk, icon: <BrandSvg d={vkPath} /> },
    { label: "Почта " + k.email, href: `mailto:${k.email}`, icon: <Mail className="h-5 w-5" /> },
    { label: "Telegram-канал с работами", href: k.channel, icon: <Send className="h-5 w-5" strokeWidth={1.8} /> },
    { label: "Профиль на Kwork", href: k.kwork, icon: <span className="font-display text-[18px] font-bold leading-none" aria-hidden>К</span>, },
  ];
  return (
    <ul className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {items.map((it) => (
        <li key={it.label}>
          <a
            href={it.href}
            {...(it.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            aria-label={it.label}
            title={it.label}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white/92 transition-all hover:border-[var(--brand)] hover:bg-[var(--brand)]/10 hover:text-[var(--brand)]"
          >
            {it.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

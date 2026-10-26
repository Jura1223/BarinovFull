import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, User, Shirt, Flame, Handshake, ArrowUp, Banknote, Eye } from "lucide-react";
import { site } from "@/content/site";
import { VideoModal } from "@/components/ui/VideoModal";
import { CountUp } from "@/components/ui/CountUp";
import { VideoThumb } from "@/components/ui/VideoThumb";

// Cinematic SVG growth chart with glow
function GrowthChart() {
  // up-and-to-the-right curve
  const path = "M0,180 C 80,170 140,160 200,140 C 260,120 320,90 380,70 C 440,55 500,45 560,30 C 620,18 680,10 720,4";
  return (
    <svg viewBox="0 0 720 200" className="w-full h-auto">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ff6a00" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ff8a3d" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff6a00" stopOpacity="1" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* grid */}
      {[40, 80, 120, 160].map((y) => (
        <line key={y} x1="0" x2="720" y1={y} y2={y} stroke="white" strokeOpacity="0.04" />
      ))}
      <path d={`${path} L720,200 L0,200 Z`} fill="url(#grad)" />
      <path d={path} fill="none" stroke="url(#line)" strokeWidth="2.5" filter="url(#glow)" />
      <circle cx="720" cy="4" r="6" fill="#ff6a00" filter="url(#glow)" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  user: User,
  shirt: Shirt,
  flame: Flame,
  handshake: Handshake,
  wallet: Banknote,
  eye: Eye,
};

export function FeaturedCase() {
  const c = site.featuredCase;
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  return (
    <section className="bg-[#0E0E0E] pb-20 md:pb-28">
      <div className="container-rail">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-5 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
               style={{ background: "var(--gradient-radial-glow)" }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative">
            {/* Left: Identity */}
            <div className="lg:col-span-4">
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Кейс №2</div>
              <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{c.name}</h3>
              <p className="mt-2 text-sm text-white/76">{c.role}</p>

              <div className="mt-8 aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10">
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover" />
              </div>

              <div className="mt-8">
                <div className="eyebrow mb-3">Точка А</div>
                <ul className="space-y-2">
                  {c.pointA.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-white/83">
                      <span className="mt-2 h-1 w-1 rounded-full bg-[var(--brand)]/80" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {c.reviewVideo && (
                <div className="mt-6 max-w-[200px]">
                  <VideoThumb
                    image={c.reviewVideo.image}
                    alt={c.reviewVideo.title}
                    onClick={() => setSelectedVideo({ url: c.reviewVideo.vkUrl, title: c.reviewVideo.title })}
                    className="aspect-[9/16] w-full"
                    playSize="md"
                  />
                  <div className="mt-3 flex animate-hint items-center justify-center gap-2 text-[var(--brand)]" aria-hidden>
                    <ArrowUp className="h-5 w-5" />
                    <span className="text-sm font-medium">Смотреть отзыв</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Result + chart */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between gap-6 flex-wrap">
                <div>
                  <div className="eyebrow mb-2">Точка Б</div>
                  <div className="font-display text-6xl md:text-7xl font-bold text-white glow-text leading-none">
                    <CountUp to={c.headlineNumber} suffix="+" />
                  </div>
                  <div className="mt-3 text-white/83">{c.headlineCaption}</div>
                </div>
                <div className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/8 px-5 py-3">
                  <div className="text-[11px] uppercase tracking-wider text-white/76">Рост</div>
                  <div className="font-display text-3xl font-bold text-[var(--brand)] flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" /> {c.growth}
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/[0.08] bg-black/30 p-4">
                <GrowthChart />
              </div>

              {/* Social Proof Blocks */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {c.socialProofs?.map((sp, i) => {
                  const Icon = iconMap[sp.icon] || User;
                  return (
                    <div key={i} className="bg-[#0e0e0e] border border-white/[0.08] rounded-xl px-4 py-4 flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-[var(--brand)]/10 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-[var(--brand)]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-white/94 font-medium">{sp.text}</div>
                        <div className="text-xs text-white/72">{sp.subtext}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 3 примера работ */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((n) => (
                  <VideoThumb
                    key={n}
                    image={`/images/previewsforvideo/igorexamplework${n}.webp`}
                    alt={`Пример работы ${n}`}
                    onClick={() => setSelectedVideo({ url: `https://vk.com/clip_ext.php?oid=1050064932&id=45623902${n}&autoplay=1`, title: `Пример работы ${n}` })}
                    className="aspect-[9/16] w-full"
                    playSize="sm"
                  />
                ))}
              </div>
            </div>
          </div>

          <VideoModal
            isOpen={selectedVideo !== null}
            onClose={() => setSelectedVideo(null)}
            videoUrl={selectedVideo?.url || ""}
            title={selectedVideo?.title}
          />
        </motion.div>
      </div>
    </section>
  );
}

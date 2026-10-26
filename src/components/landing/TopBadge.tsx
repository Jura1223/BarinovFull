import { site } from "@/content/site";


export function TopBadge() {
  const t = site.topBadge;
  return (
    <section className="py-24 md:py-32">
      <div className="container-rail">
        <div className="relative glass rounded-3xl overflow-hidden p-8 md:p-12">
          <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full opacity-50 blur-3xl"
               style={{ background: "var(--gradient-radial-glow)" }} />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative">
            <div className="md:col-span-4 relative aspect-square max-w-[280px] mx-auto md:mx-0 w-full overflow-hidden rounded-2xl border border-white/10">
              <img src={t.image} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>

            <div className="md:col-span-6">
              <h3 className="font-display text-3xl md:text-4xl font-bold leading-[1.1]">{t.title}</h3>
              <a
                href={t.subHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-white/83 underline-offset-4 hover:text-[var(--brand)] hover:underline transition-colors"
              >
                {t.sub}
              </a>
            </div>

            <div className="md:col-span-2 grid place-items-center">
              <div className="relative grid h-32 w-32 place-items-center rounded-2xl border border-[var(--brand)]/40 bg-black">
                <div className="absolute inset-0 rounded-2xl blur-2xl opacity-60"
                     style={{ background: "var(--gradient-radial-glow)" }} />
                <span className="relative font-display text-6xl font-bold text-[var(--brand)] glow-text">K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MotionConfig } from "framer-motion";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { IntroGlass } from "@/components/landing/IntroGlass";
import { Partners } from "@/components/landing/Partners";
import { CinematicBreak } from "@/components/landing/CinematicBreak";
import { Workflow } from "@/components/landing/Workflow";
import { ReelsCarousel } from "@/components/landing/ReelsCarousel";
import { NewestCase } from "@/components/landing/NewestCase";
import { FeaturedCase } from "@/components/landing/FeaturedCase";
import { SecondaryCase } from "@/components/landing/SecondaryCase";
import { DaryaCase } from "@/components/landing/DaryaCase";
import { ResultsGrid } from "@/components/landing/ResultsGrid";
import { Niches } from "@/components/landing/Niches";
import { StickyCta } from "@/components/landing/StickyCta";
import { ContentLists } from "@/components/landing/ContentLists";
import { Contrast } from "@/components/landing/Contrast";
import { Extras } from "@/components/landing/Formats";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { FinalCTA, Footer } from "@/components/landing/FinalCTA";
import { site } from "@/content/site";

/** Вся страница целиком. Порядок блоков меняется здесь. */
export function LandingPage() {
  return (
    // reducedMotion="user": если у человека в системе включено «уменьшить движение», анимации отключаются
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-hidden bg-[#0E0E0E] text-white">
        <Nav />
        <main>
          <Hero />
          <IntroGlass />
          <Partners />
          <NewestCase />
          <FeaturedCase />
          <SecondaryCase />
          <DaryaCase />
          <Services />
          <CinematicBreak text={site.break1.text} sub={site.break1.sub} />
          <ResultsGrid />
          <ReelsCarousel />
          <Niches />
          <ContentLists />
          <Contrast />
          <Workflow />
          <Extras />
          <Testimonials />
          <Faq />
          <FinalCTA />
        </main>
        <Footer />
        <StickyCta />
      </div>
    </MotionConfig>
  );
}

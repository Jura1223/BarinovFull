import { renderToString } from "react-dom/server";
import { LandingPage } from "./components/LandingPage";
import { site } from "./content/site";

/** Используется только при сборке: превращает страницу в готовый HTML. */
export function renderPage() {
  return renderToString(<LandingPage />);
}

/** Разметка для поисковиков и нейросетей (JSON-LD): кто это, чем занимается, вопросы и ответы. */
export function structuredData() {
  const url = "https://yurabarinov.ru/";
  const person = {
    "@type": "Person",
    "@id": url + "#person",
    name: "Юрий Баринов",
    alternateName: ["Юра Баринов", "Yuri Barinov"],
    jobTitle: "Контент-продюсер, режиссёр монтажа",
    description:
      "Контент-продюсер: стратегия, сценарии, монтаж Reels, Shorts и YouTube, развитие личного бренда экспертов, блогеров и компаний.",
    url,
    image: url + "og-image.jpg",
    email: "mailto:" + site.contacts.email,
    sameAs: [site.contacts.telegram, site.contacts.vk, site.contacts.kwork, site.contacts.channel],
    knowsAbout: [
      "контент-продюсирование",
      "Reels",
      "YouTube Shorts",
      "монтаж видео",
      "личный бренд",
      "контент-стратегия",
      "сценарии для коротких видео",
    ],
  };
  const service = {
    "@type": "ProfessionalService",
    "@id": url + "#service",
    name: "Юрий Баринов — контент-продюсирование",
    url,
    image: url + "og-image.jpg",
    provider: { "@id": url + "#person" },
    areaServed: "RU",
    serviceType: [
      "Продюсирование контента",
      "Reels и Shorts под ключ",
      "Монтаж видео",
      "YouTube-продюсирование",
      "Сценарии для коротких видео",
      "Ведение соцсетей",
    ],
  };
  const faq = {
    "@type": "FAQPage",
    "@id": url + "#faq",
    mainEntity: site.faq.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  const website = {
    "@type": "WebSite",
    "@id": url + "#website",
    url,
    name: "Юрий Баринов — контент-продюсер",
    inLanguage: "ru",
    publisher: { "@id": url + "#person" },
  };
  return { "@context": "https://schema.org", "@graph": [website, person, service, faq] };
}

// Весь редактируемый контент сайта лежит здесь.
// Картинки лежат в public/images/site/
const portraitHero = "/images/site/portrait-hero.webp";
const portraitCta = "/images/site/portrait-cta.webp";
const reel1 = "/images/site/reel-1.jpg";
const reel2 = "/images/site/reel-2.jpg";
const reel3 = "/images/site/reel-3.jpg";
const reel4 = "/images/site/reel-4.jpg";
const reel5 = "/images/site/reel-5.jpg";
const caseVoroncov = "/images/site/case-voroncov.webp";
const caseButuzov = "/images/site/case-butuzov.jpg";
const a1 = "/images/site/avatar-1.jpg";
const a2 = "/images/site/avatar-2.jpg";
const a3 = "/images/site/avatar-3.jpg";
const a4 = "/images/site/avatar-4.jpg";
const a5 = "/images/site/avatar-5.jpg";
const a6 = "/images/site/avatar-6.jpg";

export type Bullet = string | { t: string; hl?: boolean; href?: string }[];

export type ResultItem = {
  name: string;
  role: string;
  /** Фото или логотип (круг слева от имени). Пока пусто, показываются инициалы. */
  photo?: string;
  count?: { to: number; decimals?: number; suffix?: string };
  text?: string;
  /** Буква или эмодзи в круге вместо фото (если фото нет). */
  avatar?: string;
  /** Стиль значка (например, белый силуэт эмодзи). */
  avatarClass?: string;
  /** Иконка вместо буквы: "home". */
  avatarIcon?: "home";
  /** Небольшой скриншот справа от крупной цифры (например, число подписчиков). */
  sideStat?: { src: string; alt: string };
  /** Небольшая картинка с подписью под текстом. */
  extra?: { src: string; alt: string; caption: string };
  caption: string;
  bullets: Bullet[];
  links?: { label: string; href: string }[];
  videos?: { label: string; href: string; thumb: string }[];
  preview?: { src: string; alt: string; href?: string };
  /** Скриншот статистики подписчиков. Подключается после получения файла от заказчика. */
  statsImage?: { src: string; alt: string };
};

export type Testimonial = {
  quote?: string;
  name: string;
  role: string;
  img?: string;
  isScreenshot?: boolean;
  audioFile?: string;
  audioLabel?: string;
};

export type AlsoItem = {
  name: string;
  /** Ссылка на человека/компанию (YouTube, Instagram, сайт). Нет ссылки, значит плашка без ссылки. */
  href?: string;
  /** Логотип слева от названия: файл в public/images/logos/, например "/images/logos/honor.svg". */
  logo?: string;
  /** true: показать только логотип без надписи (название уходит в подпись для читалок экрана). */
  logoOnly?: boolean;
};

export const site = {
  brand: { name: "ЮРА БАРИНОВ", tagline: "Контент-продюсер" },
  nav: [
    { label: "Обо мне", href: "#about" },
    { label: "Кейсы", href: "#cases" },
    { label: "Услуги", href: "#services" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Вопросы", href: "#faq" },
    { label: "Контакты", href: "#contact" },
  ],
  cta: { label: "Связаться в Telegram", href: "https://t.me/yurabarinov" },

  // Контакты: используются в подвале, блоке «Связаться» и в разметке для поисковиков
  contacts: {
    telegram: "https://t.me/yurabarinov",
    vk: "https://vk.ru/jurabarinov",
    email: "jurabarinovceo@gmail.com",
    kwork: "https://kwork.ru/user/yurabarinov",
    channel: "https://t.me/yurareels",
  },

  intro: {
    lines: [
      "Я Юрий Баринов, контент-продюсер и режиссёр монтажа. Помогаю экспертам и компаниям создавать контент, который привлекает внимание, укрепляет доверие и приводит заявки.",
    ],
    accent:
      "За 5+ лет работы я накопил опыт сотрудничества с крупными блогерами, известными экспертами и компаниями из разных ниш. Умею делать контент не просто красивым, а результативным в любой теме.",
  },

  hero: {
    titleLine1: "Помогаю экспертам и компаниям",
    titleAccent: "расти через Reels и Shorts",
    titleLine2: "",
    subLine1: "Беру на себя идеи, сценарии, монтаж и развитие контента.",
    subLine2: "Помогаю выстраивать систему, которая привлекает аудиторию и помогает получать заявки.",
    subLine3: "",
    image: portraitHero,
    metrics: [
      { icon: "clapperboard", value: "8000+", label: "видео создано" },
      { icon: "eye", value: "800+ млн", label: "просмотров" },
      { icon: "star", value: "2500+", label: "отзывов" },
    ],
  },

  // «С кем я работал», крупные карточки (порядок как в списке).
  // photo: путь к фото. Файл кладётся в public/images/people/ (лучше вертикальный, WebP или JPG).
  // Пока пусто, показывается заглушка с инициалами.
  people: [
    {
      name: "Виталий Гогунский",
      role: "Актёр, Кузя из „Универа“",
      note: "Охваты ×3 и полное продюсирование",
      photo: "/images/people/gogunsky-card.webp",
      photoClass: "object-[65%_8%] md:object-[65%_22%]",
    },
    {
      name: "Тамара Эйдельман",
      role: "Историк, заслуженный учитель РФ",
      note: "Shorts на 3,7+ млн просмотров",
      photo: "/images/people/eidelman.webp",
      photoClass: "object-[50%_18%]",
    },
    {
      name: "Дарья Плужникова",
      role: "Участница шоу «Титаны» · 3M+",
      note: "Ролики на 20+ млн просмотров",
      photo: "/images/people/pluzhnikova.jpg",
      photoClass: "object-[50%_12%]",
    },
    {
      name: "Александр Панчин",
      role: "Самый известный биолог СНГ",
      note: "Полный цикл создания Shorts, стиль с нуля",
      photo: "/images/people/panchin.webp",
      photoClass: "object-[50%_10%]",
    },
    {
      name: "Игорь Воронцов",
      role: "Эксперт по здоровью · 730K",
      note: "Набрали с 15 тысяч до 730 тысяч подписчиков за один год",
      photo: "/images/people/vorontsov.jpg",
      photoClass: "object-[50%_15%]",
    },
    {
      name: "Максим Вердикт",
      hideText: true,
      role: "",
      note: "Консультации по контенту",
      photo: "/images/people/verdict-case.jpg",
      photoClass: "object-[50%_0%]",
    },
    {
      name: "Павел Воля",
      hideText: true,
      role: "",
      note: "Совместные коллаборации",
      href: "https://www.instagram.com/pavelvolyaofficial/",
      photo: "/images/people/volya-case.jpg",
      photoClass: "object-[50%_0%]",
    },
    {
      name: "Проект «СЛОН»",
      role: "Научпоп: Курпатов, Савватеев, Семихатов",
      note: "Полный монтаж и сопровождение",
      photo: "/images/people/kurpatov-card.webp",
      photoClass: "object-[50%_0%]",
    },
    {
      name: "Энтони Американец",
      role: "YouTube-блогер",
      note: "14 млн просмотров, один Shorts круто продаёт",
      photo: "/images/people/anthony.webp",
      photoClass: "object-[40%_12%] md:object-[42%_18%]",
    },
    {
      name: "Витус Бритва",
      role: "Известный стример, друг Мелстроя",
      note: "Монтаж и Reels-продюсирование",
      photo: "/images/people/britva.webp",
      photoClass: "object-[50%_15%]",
    },
    {
      name: "HONOR × Яндекс Практикум",
      hideText: true,
      role: "Рекламный видеопродакшен для крупных брендов",
      note: "Рекламная интеграция для HONOR и промо для Яндекс Практикума",
      photo: "/images/people/brands-honor-yandex.webp",
      photoClass: "object-[50%_0%]",
    },
    {
      name: "ТНТ4 × НТВ × Россия 24 × РБК",
      hideText: true,
      role: "Рекламные проекты для телеканалов",
      note: "Рекламные ролики и видеоконтент для телеканалов",
      photo: "/images/people/brands-tv.webp",
      photoClass: "object-[50%_0%]",
    },
  ],

  alsoWorked: {
    title: "Также работал с",
    groups: [
      {
        title: "Бренды и телеканалы",
        items: [
          { name: "Яндекс Практикум", logo: "/images/logos/yandex-practicum.png" },
          { name: "HONOR" },
          { name: "Leroy Merlin", logo: "/images/logos/leroy-merlin.svg" },
          { name: "НТВ", logo: "/images/logos/ntv.png" },
          { name: "Россия 24", logo: "/images/logos/russia24.svg" },
          { name: "РБК", logo: "/images/logos/rbc.png" },
        ] as AlsoItem[],
      },
      {
        title: "Музыка и шоу",
        items: [
          { name: "Сектор Газа" },
          { name: "Нэнси" },
          { name: "Гарик Богомазов" },
          { name: "Настасья Самбурская" },
          { name: "Андрей Алексин" },
        ] as AlsoItem[],
      },
      {
        title: "Эксперты и блогеры",
        items: [
          { name: "Андрей Курпатов" },
          { name: "Алексей Савватеев" },
          { name: "Александр Семихатов" },
          { name: "Вячеслав Дубынин" },
          { name: "Владимир Сурдин" },
          { name: "Станислав Дробышевский" },
          { name: "Ася Казанцева" },
          { name: "Максим Вердикт", href: "https://www.youtube.com/@%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%D0%92%D0%B5%D1%80%D0%B4%D0%B8%D0%BA%D1%82" },
          { name: "Егор Максимов · 455K", href: "https://www.youtube.com/@egor_shows" },
        ] as AlsoItem[],
      },
    ],
    international:
      "Международный опыт: Валентина Мишина (США), популярный бодибилдер, и компании из Европы и Америки",
  },

  services: {
    left: {
      title: "Продюсирование",
      items: [
        "Распаковка личности: выявляю ваши сильные стороны для подачи",
        "Сценарии и идеи под алгоритмы соц.сетей",
        "Съёмка с поддержкой, помогаю с уверенностью в кадре",
        "Динамичный монтаж и упаковка",
        "Дизайнерское оформление профиля",
        "Аналитика и оптимизация: увеличение охватов",
        "Продюсерская поддержка и связь 24/7",
        "Полное ведение соцсетей и SMM",
        "Системный контент без стресса и хаоса",
      ],
    },
    right: {
      title: "Производство под ключ",
      items: [
        "Reels / Shorts и длинные YouTube-видео под задачи проекта",
        "Разработка сценариев под конкретные ролики (без стратегии)",
        "Динамичный монтаж с удержанием",
        "Создание обложек и превью под видео",
      ],
    },
  },

  break1: {
    text: "Просмотры - это база.\nНо доверие - ещё важнее.",
    sub: "Я помогаю делать контент, который не просто собирает охваты,\nа вызывает доверие и приводит клиентов.",
  },
  break2: {
    text: "Просмотры без доверия не приводят клиентов.",
    sub: "Я строю и то, и другое, одновременно.",
  },
  break3: {
    text: "Сегодня выигрывает тот, кому доверяют.",
    sub: "Контент, самый короткий путь к этому доверию.",
  },

  workflow: [
    { n: "01", title: "Заявка и брифинг", desc: "Разбираем вашу цель, аудиторию, конкурентов и точку А." },
    { n: "02", title: "Стратегия и сценарии", desc: "Контент-план, концепции, рубрики и сценарии под платформу." },
    { n: "03", title: "Производство", desc: "Съёмка, монтаж, графика, упаковка под Reels, Shorts, YouTube." },
    { n: "04", title: "Рост и оптимизация", desc: "Аналитика, гипотезы, докрутка форматов и масштабирование." },
  ],
  workflowNote: "",

  reels: [
    { src: "/images/previewsforvideo/example13.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=-225790566&id=456239190&autoplay=1" },
    { src: "/images/previewsforvideo/example1.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=-220903431&id=456239159&autoplay=1" },
    { src: "/images/previewsforvideo/example2.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239050&autoplay=1" },
    { src: "/images/previewsforvideo/example3.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239034&autoplay=1" },
    { src: "/images/previewsforvideo/example4.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239042&autoplay=1" },
    { src: "/images/previewsforvideo/example5.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239047&autoplay=1" },
    { src: "/images/previewsforvideo/example6.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239045&autoplay=1" },
    { src: "/images/previewsforvideo/example7.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239048&autoplay=1" },
    { src: "/images/previewsforvideo/example8.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239037&autoplay=1" },
    { src: "/images/previewsforvideo/example9.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239038&autoplay=1" },
    { src: "/images/previewsforvideo/example10.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239039&autoplay=1" },
    { src: "/images/previewsforvideo/example11.webp", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239049&autoplay=1" },
    { src: "/images/previewsforvideo/example12.webp", label: "", views: "", vkUrl: "https://www.youtube.com/embed/guDOIIA7-Sc?si=_l6rtbl5shsxgPDX", isHorizontal: true },
  ],

  // Самый свежий кейс, показывается первым
  newestCase: {
    name: "Виталий Гогунский",
    role: "Артист, «Кузя» из «Универа», музыкант VIGO",
    photo: "/images/people/gogunsky-case.webp",
    metrics: [
      { prefix: "×", to: 3, suffix: "", label: "органические охваты" },
      { prefix: "", to: 82, suffix: "%+", label: "удержание на Reels" },
      { prefix: "", to: 500, suffix: "K+", label: "просмотров на роликах" },
      { prefix: "", to: 1, suffix: "M+", label: "на топовых роликах" },
    ],
    done: [
      "Полное ведение 7 соцсетей и продюсирование контента",
      "Контент-стратегия под продвижение концертов",
      "Сценарии и продюсирование роликов под ключ",
      "Монтаж и разработка стиля Reels / Shorts / TikTok из собственных съёмок",
      "Рекламные и прогревающие ролики для концертов и спецпроектов",
      "Полная визуальная упаковка аккаунтов и новый стиль оформления",
      "Моушн-монтаж сниппетов для треков Виталия",
      "Продвижение VIGO как отдельного музыкального образа артиста",
      "Ведение YouTube, SEO-оптимизация заголовков и упаковки видео",
      "Коллаборации с ТНТ, Матч ТВ и крупными медийными артистами: Азамат Мусагалиев, Денис Дорохов, Мария Кожевникова и другие",
    ],
    result:
      "Вёл YouTube и все соцсети артиста, выстраивал сценарии и сам монтировал ролики. Аудитория часто встречала Виталия хейтом, и его мысли не доходили. За счёт монтажа и сценариев получилось донести их яснее и превратить негатив в активное вовлечение. Привлекли новую аудиторию и втрое увеличили органические охваты. Ролики набирают больше 500 тысяч просмотров, а топовые больше миллиона. Полностью изменили визуал и подачу профиля.",
    links: [
      { label: "Пример 1", href: "https://www.instagram.com/p/DYxEg3BiXSR/" },
      { label: "Пример 2", href: "https://www.instagram.com/p/DY4B-R3iKus/" },
      { label: "Пример 3", href: "https://www.instagram.com/p/DY9nIeaoXyG/" },
      { label: "Пример 4", href: "https://www.instagram.com/p/DYsejbXN0il/" },
    ],
  },

  featuredCase: {
    tag: "",
    name: "Игорь Воронцов",
    role: "Эксперт по здоровью, фитнес-тренер",
    image: caseVoroncov,
    instagramImage: "/images/cases/voroncov-instagram.webp",
    pointA: [
      "в Instagram было около 15 000 подписчиков",
      "контент шёл не системно",
      "не было упаковки и единой стратегии",
      "доход стопорился",
    ],
    headline: "730 000+",
    headlineNumber: 730000,
    headlineCaption: "подписчиков за год, только на Reels и без рекламы",
    growth: "+48×",
    socialProofs: [
      { icon: "wallet", text: "Запуски по 7–12 млн ₽", subtext: "после выхода на большую аудиторию" },
      { icon: "wallet", text: "Запуск на 10+ млн ₽", subtext: "только с 4 Reels" },
      { icon: "eye", text: "Топовые ролики 2–5 млн", subtext: "охваты без таргета, только органика" },
      { icon: "user", text: "Подписался", subtext: "Влад Топалов (муж Регины Тодоренко)" },
      { icon: "shirt", text: "Выпустили", subtext: "свой мерч одежды" },
      { icon: "flame", text: "Reels попадали", subtext: "в ТОПОР и крупные паблики" },
      { icon: "handshake", text: "Коллабы с топ-блоггерами", subtext: "9+ миллиоников" },
    ],
    proof: [],
    quote: "Если хотите реально офигенного рилсмейкера себе, Юра это тот, кто вам нужен.",
    audioLabel: "Прослушать видео-отзыв",
    videos: [
      {
        id: "voroncov-1",
        title: "Пример работы 1",
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239021&autoplay=1",
        image: "/images/previewsforvideo/igorexamplework1.webp"
      },
      {
        id: "voroncov-2", 
        title: "Пример работы 2",
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239022&autoplay=1",
        image: "/images/previewsforvideo/igorexamplework2.webp"
      },
      {
        id: "voroncov-3",
        title: "Пример работы 3", 
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239023&autoplay=1",
        image: "/images/previewsforvideo/igorexamplework3.webp"
      },
      {
        id: "voroncov-4",
        title: "Пример работы 4",
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239024&autoplay=1",
        image: "/images/previewsforvideo/igorexamplework4.webp"
      }
    ],
    reviewVideo: {
      id: "voroncov-review",
      title: "Отзыв Игоря Воронцова",
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239025&autoplay=1",
      image: "/images/previewsforvideo/igor-feedback.webp"
    }
  },

  secondaryCase: {
    tag: "",
    name: "Павел Бутузов",
    role: "Психолог, психотерапевт",
    image: caseButuzov,
    instagramImage: "/images/cases/pavel-butuzov-instagram.webp",
    pointA: [
      "Цена консультации: 20.000 руб",
      "Сложно неинтуитивный профиль",
      "Прирост подписчиков стоял на месте",
      "Павел пытался сам делать ролики, но они не набирали больше 7000 просмотров"
    ],
    headlineLeft: { value: "+30 000", caption: "новых подписчиков в Instagram" },
    headlineMid: { value: "35 000 ₽", caption: "цена консультации выросла на +15 000 руб" },
    headlineRight: { value: "", caption: "После нашей работы на аккаунт подписался Арсен Маркарян" },
    videos: [
      {
        id: "butuzov-1",
        title: "Пример работы 1",
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239026&autoplay=1",
        image: "/images/previewsforvideo/butuzov-examplework1.webp"
      },
      {
        id: "butuzov-2",
        title: "Пример работы 2", 
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239028&autoplay=1",
        image: "/images/previewsforvideo/butuzov-examplework2.webp"
      }
    ],
    reviewVideo: {
      id: "butuzov-review",
      title: "Отзыв Павла Бутузова",
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239027&autoplay=1",
      image: "/images/previewsforvideo/butuzov-feedback.webp"
    }
  },


  videoExamples: [
    {
      id: "vape-theme",
      title: "Вейп-тематика",
      views: "13 млн просмотров",
      image: reel1,
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239029&autoplay=1"
    },
    {
      id: "russian-habit",
      title: "Русская привычка, которая шокирует США",
      views: "7 млн просмотров",
      image: reel2,
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239030&autoplay=1"
    },
    {
      id: "homophobia",
      title: "Откуда берется гомофобия?",
      views: "2.1 млн просмотров",
      image: reel3,
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239031&autoplay=1"
    },
    {
      id: "bloody-spa",
      title: "Кровавое SPA",
      views: "2 млн просмотров",
      image: reel4,
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239032&autoplay=1"
    },
    {
      id: "hitler-death",
      title: "Как умер Гитлер",
      views: "320 тыс просмотров",
      image: reel5,
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239033&autoplay=1"
    }
  ],

  contentLists: {
    title: "Контент с продажами без стресса и выгорания: это реально :)",
    items: [
      "Помогаю чувствовать себя увереннее в кадре и говорить естественно",
      "Подстраиваю формат под ваш стиль и подачу",
      "Делаю процесс спокойным, понятным и без лишнего стресса",
      "Беру на себя все технические моменты и монтаж",
      "Готовлю сценарии и подачу под ваш стиль",
      "Вам остаётся только снять видео совместное, затем улыбнуться, остальное я беру на себя :)"
    ],
  },

  contrast: {
    title: "КОГДА НЕТ РЕЗУЛЬТАТА?",
    cold: {
      title: "Почему контент не работает",
      items: [
        "Ролики выходят нерегулярно, а темы не складываются в понятный образ.",
        "Просмотры есть, но они не приводят нужную аудиторию и заявки.",
        "Съёмки отнимают время, а результаты непредсказуемы.",
        "Приходится самостоятельно контролировать подрядчиков и разбираться во всех деталях.",
      ],
    },
    warm: {
      title: "Что с этим делать",
      items: [
        "Определить позиционирование и темы, которые интересны нужной аудитории.",
        "Выстроить понятную систему идей, сценариев и съёмок.",
        "Улучшить подачу и монтаж, чтобы ролики удерживали внимание.",
        "Анализировать результаты и усиливать форматы, которые работают.",
      ],
    },
    result:
      "Контент перестаёт быть хаотичным процессом. Появляется понятный план, регулярное производство и понимание, что стоит продолжать, а что нужно изменить.",
  },

  manifesto: {
    title: "Я не делаю контент ради просмотров.",
    body: "Моя задача: создавать систему контента, которая растит аудиторию, усиливает личный бренд, повышает доверие и конвертирует клиентов.",
  },

  formats: [
    { title: "Продюсирование контента", desc: "Контент под ключ: стратегия, сценарии, продакшн, аналитика." },
    { title: "Reels / Shorts под ключ", desc: "Сценарии, монтаж, упаковка, публикации." },
    { title: "YouTube-продюсирование", desc: "Сценарии, съёмка, продюсирование канала." },
    { title: "Дизайн", desc: "Обложки, превью, графика для соцсетей и личного бренда." },
  ],

  extras: [
    { title: "SMM-ведение и оформление соцсетей", icon: "share" },
    { title: "Telegram-боты и автоворонки", icon: "bot" },
    { title: "Контент-аналитика и стратегия роста", icon: "chart" },
    { title: "Создание сайтов", icon: "layout" },
    { title: "Прогревы и контентные воронки", icon: "flame" },
    { title: "Консультации по развитию медийности", icon: "compass" },
    { title: "Сценарии и монтаж", icon: "film" },
    { title: "Любой дизайн (от карточек до афиш)", icon: "palette" },
    { title: "Моушен-дизайн", icon: "sparkles" },
  ],

  testimonials: [
    {
      quote: "Если хотите реально офигенного рилсмейкера себе, Юра это тот, кто вам нужен.",
      name: "Игорь Воронцов",
      role: "Эксперт по здоровью, фитнес-тренер",
      img: "/images/people/vorontsov.webp",
    },
    {
      quote: "",
      name: "Тамара Эйдельман",
      role: "",
      img: "/images/cases/eidelman.webp",
      isScreenshot: true,
    },
    {
      quote: "",
      name: "Дарья Черняк",
      role: "",
      img: "/images/cases/chernyak.webp",
      isScreenshot: true,
    },
    {
      quote: "Спасибе тебе за ответы, закрыл все вопросы по стратегии благодаря тебе. Как кейс - юзай конечно )",
      name: "Максим Вердикт",
      role: "эксперт по отношениям",
      img: "",
      audioFile: "/audio/verdikt-review.mp3",
      audioLabel: "Прослушать голосовой отзыв",
    } as Testimonial,
  ],

  topBadge: {
    title: "ТОП 1 МОНТАЖЁР НА ПЕРЕДОВОЙ БИРЖЕ ФРИЛАНСА В СНГ",
    sub: "Более 1800 отзывов, читать тут",
    subHref: "https://kwork.ru/user/yurabarinov",
    image: portraitCta,
  },

  daryaCase: {
    name: "Дарья Черняк",
    role: "Фитнес-тренер",
    image: a4,
    instagramImage: "/images/cases/daria-chernyak-instagram.webp",
    headline: "Комфорт, доверие и стабильный монтаж",
    metrics: [
      { value: "2+", label: "года работы вместе" },
      { value: "1–2 млн", label: "просмотров на топовых роликах" },
    ],
        bullets: [
      "Монтаж динамично и с мемами из сырых исходников",
      "Выросли удержание и просмотры",
      "Консультации по правильному ведению Reels",
      "Улучшили оформление профиля",
    ],
    proof: [a1, a2, a3, a5, a6],
    quote:
      "Раньше я монтировала всё сама и долго не могла доверить монтаж другому человеку. С Юрой всё оказалось очень спокойно и комфортно: быстрые правки, понимание подачи, нормальная коммуникация и ощущение, что человек реально вовлечён в результат.\n\nРаботаем уже много месяцев, и это один из самых комфортных опытов работы.",
    audioLabel: "Прослушать голосовой отзыв",
    audioFile: "/audio/darya-chernyak-review.mp3"
  },

  // Остальные кейсы, компактные карточки.
  // photo: фото или логотип (файл в public/images/people/), videos: ролики с превью, preview: скриншот ролика.
  results: {
    title: "Ещё результаты",
    items: [
      {
        name: "Недвижимость в Москве",
        role: "Ролик на YouTube Shorts",
        photo: "",
        avatar: "",
        avatarIcon: "home",
        count: { to: 8, suffix: " сделок" },
        caption: "закрыто с одного ролика: агент получил комиссию, ролик окупился в разы",
        bullets: ["Ролик набрал 308 тысяч просмотров, клиенты пришли именно с него", "Сложная смежная ниша, но контент окупился"],
        links: [{ label: "Смотреть ролик", href: "https://www.youtube.com/shorts/sjGWMdlArl4" }],
        preview: { src: "/images/cases/result-realty.webp", alt: "Ролик про вклад или квартиру: 308 тысяч просмотров" },
      },
      {
        name: "Тамара Эйдельман",
        role: "Историк, заслуженный учитель РФ",
        photo: "/images/people/eidelman-new.jpg",
        count: { to: 3.7, decimals: 1, suffix: " млн+" },
        caption: "просмотров на виральных Shorts",
        statsImage: { src: "/images/cases/eidelman-case.png.png", alt: "Канал Тамары Эйдельман на YouTube: 1,82 млн подписчиков" },
        bullets: ["Первый монтажёр Shorts на канале, работаю больше 4 лет", "С нуля создал стиль роликов", "Отбираю самые сильные моменты для Shorts", "Закрыл более 1000 заказов"],
        links: [{ label: "YouTube-канал", href: "https://www.youtube.com/@TamaraEidelmanHistory" }],
      },
      {
        name: "Дарья Плужникова",
        role: "Участница шоу ТНТ «Титаны» · 3M+ подписчиков",
        photo: "/images/people/pluzhnikova.jpg",
        count: { to: 20, suffix: " млн+" },
        caption: "просмотров на вирусных роликах",
        statsImage: { src: "/images/cases/pluzhnikova-cases.png", alt: "Instagram Дарьи Плужниковой: 3,6 млн подписчиков" },
        bullets: [
          "Продюсировал и монтировал совместные ролики",
          "Режиссировал монтаж Reels с ТНТ-шоу «Погоня» и «Титаны»",
          "Создал оформление профиля",
        ],
        links: [{ label: "Instagram", href: "https://www.instagram.com/dariapluzh/" }],
      },
      {
        name: "Александр Панчин",
        role: "Самый известный биолог СНГ",
        photo: "/images/people/panchin-new.jpg",
        photoClass: "object-[50%_15%]",
        count: { to: 40, suffix: "+ мин" },
        caption: "полные выпуски на YouTube-канале",
        statsImage: { src: "/images/cases/panchin-case.png", alt: "Канал Александра Панчина на YouTube: 520 тыс. подписчиков" },
        bullets: ["Полный цикл создания Shorts, создал стиль для шортсов с нуля", "Самые первые Reels тоже делал я"],
        extra: { src: "/images/cases/panchin-call.webp", alt: "Созвон Юрия Баринова с Александром Панчиным и Егором Максимовым", caption: "Созвон с Егором Максимовым (канал 455 тыс. подписчиков) и Александром Панчиным (520+ тыс. подписчиков)" },
        links: [{ label: "YouTube-канал", href: "https://www.youtube.com/@Scinquisitor" }],
        videos: [
          { label: "Выпуск 1", href: "https://www.youtube.com/watch?v=guDOIIA7-Sc&t=4s", thumb: "https://i.ytimg.com/vi/guDOIIA7-Sc/hqdefault.jpg" },
          { label: "Выпуск 2", href: "https://www.youtube.com/watch?v=P-J2ibUhSkI&t=53s", thumb: "https://i.ytimg.com/vi/P-J2ibUhSkI/hqdefault.jpg" },
        ],
      },
      {
        name: "Проект «СЛОН»",
        role: "Научпоп-проект",
        photo: "/images/people/kurpatov-card.webp",
        text: "Основной монтажёр",
        caption: "задал стиль монтажа всего проекта",
        bullets: [
          [
            { t: "Выступали: " },
            { t: "Курпатов", hl: true, href: "https://vkvideo.ru/video-220903431_456239108?t=8m26s" },
            { t: ", " },
            { t: "Савватеев", hl: true, href: "https://vkvideo.ru/video-220903431_456239286" },
            { t: ", " },
            { t: "Семихатов", hl: true, href: "https://vkvideo.ru/video-220903431_456239060" },
            { t: ", " },
            { t: "Дубынин", hl: true, href: "https://vkvideo.ru/@s_l_o_n_37/all/popular" },
            { t: " (популярные учёные)" },
          ],
          "Стабильно высокие просмотры",
        ],
        preview: { src: "/images/cases/result-slon.webp", alt: "Ролик СЛОН «Секреты золота»: 584 тысячи просмотров" },
        links: [{ label: "Проект во ВКонтакте", href: "https://vk.com/s_l_o_n_37" }],
      },
      {
        name: "Энтони Американец",
        role: "YouTube-блогер",
        photo: "/images/people/anthony.webp",
        count: { to: 14, suffix: " млн" },
        sideStat: { src: "/images/cases/anthony-subs.webp", alt: "Канал Энтони Американца: 840 тыс. подписчиков" },
        caption: "просмотров Shorts в TikTok и YouTube суммарно",
        bullets: ["Главный монтажёр Shorts на его канале", "Один Shorts круто продаёт", "Один ролик: 6,9 млн на YouTube и 7,1 млн в TikTok, суммарно 14 млн"],
        preview: { src: "/images/cases/result-anthony.webp", alt: "Shorts Энтони Американца: 6,9 млн просмотров на YouTube" },
        links: [
          { label: "YouTube-канал", href: "https://www.youtube.com/@AnthonyAmerican" },
          { label: "Работы на Kwork", href: "https://kwork.ru/portfolio/11206001" },
        ],
      },
      {
        name: "Витус Бритва",
        role: "Известный стример, друг Мелстроя",
        photo: "/images/people/britva.webp",
        text: "Монтаж для всех соцсетей",
        caption: "один стиль, подогнанный под каждую платформу",
        bullets: ["Создал стиль монтажа с адаптацией под все соцсети", "Стабильно высокие просмотры", "Срежиссировал ролик с Пашей Техником"],
        preview: { src: "/images/cases/result-vitus.webp", alt: "Ролик Витуса Бритвы, срежиссированный Юрием Бариновым" },
        links: [{ label: "Instagram", href: "https://www.instagram.com/vituskik/" }],
      },
      {
        name: "Ролик с Маритой Плиевой",
        role: "Совместно с Дарьей Плужниковой",
        photo: "/images/people/plieva.png",
        count: { to: 24.8, decimals: 1, suffix: " млн" },
        caption: "просмотров на одном ролике",
        statsImage: { src: "/images/cases/marita-case.png", alt: "Instagram Мариты Плиевой: 6,5 млн подписчиков" },
        bullets: ["Продюсировал и монтировал", "Совместный ролик с Маритой Плиевой"],
        links: [{ label: "Марита Плиева в Instagram", href: "https://www.instagram.com/marita_plieva/" }],
        preview: { src: "/images/cases/result-plieva1.webp", alt: "Ролик на 24,8 млн просмотров с Маритой Плиевой" },
      },
      {
        name: "Ролик для канала Скидона",
        role: "Ниша вейпинга",
        photo: "",
        avatar: "С",
        count: { to: 17, suffix: " млн" },
        caption: "просмотров на одном ролике в узкой нише",
        bullets: ["Монтаж под ключ", "Высокое удержание и динамика"],
        links: [{ label: "YouTube Shorts", href: "https://www.youtube.com/shorts/HsYr9OTBxHU" }],
        preview: { src: "/images/cases/result-vape.webp", alt: "Ролик на 17 млн просмотров в нише вейпинга" },
      },
      {
        name: "Оружейный магазин ОборонаШоп",
        role: "Shorts под ключ",
        photo: "",
        avatar: "🔫",
        avatarClass: "[filter:brightness(0)_invert(1)]",
        count: { to: 7.1, decimals: 1, suffix: " млн" },
        caption: "просмотров на одном ролике (от 2,2 до 7,1 млн)",
        bullets: [
          "Запрос: монтаж под ключ с высоким удержанием и динамикой",
          "Товар в среднем стоит около 25 000 ₽, ролики окупились магазину",
        ],
        links: [
          { label: "YouTube-канал", href: "https://www.youtube.com/@oboronashopru" },
          { label: "Ролик на 7,1 млн", href: "https://t.me/yurareels/245" },
        ],
        preview: { src: "/images/cases/oboronashop.png", alt: "Оружейный магазин ОборонаШоп" },
      },
    ] as ResultItem[],
  },

  niches: {
    title: "Работаю с самыми разными нишами",
    subtitle: "От науки, психологии и образования до недвижимости, автомобилей и развлечений.",
    chips: ["Наука", "Психология", "Образование", "Недвижимость", "Авто", "Ювелирка", "Английский язык", "Фитнес", "IT-проекты", "Сниппеты и клипы"],
    outro: "И это далеко не всё",
    fromScratch:
      "Беру проекты как с полного нуля, так и уже с аудиторией и довожу до стабильно высоких охватов. Участвую в съёмках, пишу сценарии, провожу созвоны: беру весь процесс на себя.",
  },

  faq: {
    title: "Вопросы и ответы",
    items: [
      {
        q: "С чего начинается работа?",
        a: "С вашего сообщения мне в Telegram. Я помогу разобрать вашу цель, нишу, аудиторию и конкурентов, а затем предложу формат работы.",
      },
      {
        q: "Нужно ли мне самому сниматься?",
        a: "Если вы эксперт или блогер, то обычно да, в кадре будете вы. Я помогу чувствовать себя увереннее и говорить естественно, заранее подготовлю сценарий и подскажу, как держаться. Монтаж, графику и всю техническую часть беру на себя. Если сниматься не хочется, всё можно сделать на озвучке: озвучка тоже генерируется, а я подберу под неё кадры. Так что сниматься на самом деле не обязательно.",
      },
      {
        q: "С какими площадками вы работаете?",
        a: "Instagram Reels, YouTube (Shorts и длинные видео), TikTok, VK Клипы и Telegram. Для проектов под ключ также занимаюсь оформлением профилей и ведением соцсетей.",
      },
      {
        q: "Работаете ли вы с компаниями и брендами?",
        a: "Да. Есть опыт с рекламными роликами для Яндекс Практикума, HONOR и Леруа Мерлен, работа с телеканалами ТНТ4, НТВ, Россия 24, а также с музыкантами, экспертами и блогерами.",
      },
      {
        q: "Работаете ли вы в разных нишах?",
        a: "Да. Делал контент для недвижимости, фитнеса, психологии, науки, музыки и интернет-магазинов. Если ниша новая, начинаем с разбора аудитории и конкурентов.",
      },
      {
        q: "Можно ли заказать только Reels, Shorts или сценарии?",
        a: "Да. Я делаю Reels и Shorts под ключ, длинные YouTube-видео, отдельные сценарии под конкретные ролики, обложки и превью. Полное продюсирование тоже вариант, если нужен системный рост.",
      },
    ],
  },

  finalCta: {
    title: "Если вам нужен не просто монтажёр, а человек, который поможет выстроить медийность",
    sub: "Напишите мне в Telegram, разберём вашу нишу, цель и стратегию.",
    image: portraitCta,
    button: "Связаться в Telegram",
  },
};

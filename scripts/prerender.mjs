// Запускается автоматически после `vite build` (см. package.json → "build").
// Берёт готовую страницу и кладёт её HTML внутрь dist/index.html, чтобы поисковики
// и нейросети видели весь текст сайта без выполнения скриптов.
import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "dist", "index.html");
let html = fs.readFileSync(indexPath, "utf-8");

// Получаем VITE_SITE_URL из переменных окружения
const siteUrl = process.env.VITE_SITE_URL || "https://jura1223.github.io/BarinovFull/";

const server = await createServer({
  root,
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const mod = await server.ssrLoadModule("/src/prerender.tsx");
  const body = mod.renderPage();
  const jsonLd = JSON.stringify(mod.structuredData());

  if (!html.includes('<div id="root"></div>')) throw new Error('В dist/index.html не найден <div id="root"></div>');
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  html = html.replace("<!--JSONLD-->", `<script type="application/ld+json">${jsonLd.replace(/</g, "\\u003c")}</script>`);

  // Заменяем URL в HTML на правильный для текущего окружения
  html = html.replace(/https:\/\/yurabarinov\.ru/g, siteUrl.replace(/\/$/, ''));

  // Заменяем абсолютные пути к статическим ресурсам в prerendered HTML
  const basePath = process.env.VITE_BASE_PATH || '/';
  if (basePath !== '/') {
    // Заменяем только в prerendered части (после <div id="root">)
    const rootIndex = html.indexOf('<div id="root">');
    if (rootIndex !== -1) {
      const beforeRoot = html.substring(0, rootIndex);
      const afterRoot = html.substring(rootIndex);
      const updatedAfterRoot = afterRoot.replace(/=["']\/(images|audio)\//g, `="${basePath}$1/`);
      html = beforeRoot + updatedAfterRoot;
    }
  }

  fs.writeFileSync(indexPath, html);
  console.log(`prerender: ok (${(body.length / 1024).toFixed(0)} KB HTML внутри index.html)`);
} finally {
  await server.close();
}

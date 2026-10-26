import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

// Примечание: сейчас сайт собирается как одна страница (см. src/main.tsx и scripts/prerender.mjs),
// этот файл оставлен для будущих отдельных страниц.
export const Route = createFileRoute("/")({
  component: LandingPage,
});

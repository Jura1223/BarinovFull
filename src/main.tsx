import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { LandingPage } from "./components/LandingPage";
import "./styles.css";

const rootElement = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);

// После сборки (npm run build) в #root уже лежит готовый HTML страницы — его читают поисковики
// и нейросети. Браузер «оживляет» его через hydrateRoot. В режиме разработки #root пустой.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

import "@/styles/global.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./AppRouter";

const container = document.getElementById("app") as HTMLDivElement;

const root = createRoot(container);

root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);

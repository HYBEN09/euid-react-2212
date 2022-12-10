import "@/styles/global.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app/App";

createRoot(document.getElementById("app") as HTMLDivElement).render(
  <StrictMode>
    <App />
    {/* <App headline="React😌 !!" /> */}
    {/* <App description="React is Interface UI Library 😗" /> */}
  </StrictMode>
);

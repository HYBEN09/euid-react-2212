import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("app")! as HTMLDivElement).render(
  <StrictMode>
    <App
      headline={"React Application"}
      description={
        <>
          React is <abbr title="user Interface">UI</abbr> Library
        </>
      }
    />
  </StrictMode>
);

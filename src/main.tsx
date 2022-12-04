import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { SassButton, TailwindButton } from "./button";

import "./tailwind.css";

createRoot(document.getElementById("app")! as HTMLDivElement).render(
  <StrictMode>
    <App
      headline={"React Application"}
      description={
        <Fragment>
          React is <abbr title="User Interface">UI</abbr>Library
        </Fragment>
      }
    />
    <SassButton children={"SassButton"} />
    <TailwindButton children={"TailwindButton"} />
  </StrictMode>
);

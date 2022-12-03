import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

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
  </StrictMode>
);

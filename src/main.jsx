import App from "./App.js";

const { Component, StrictMode } = React;
const { createRoot } = ReactDOM;

const container = document.getElementById("app");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);

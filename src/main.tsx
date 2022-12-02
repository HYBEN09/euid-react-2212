import App from "./App.js";

const { React, ReactDOM } = window;

const { Component, StrictMode } = React;
//@ts-ignore
const { createRoot } = ReactDOM;

const container = document.getElementById("app");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);

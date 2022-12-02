import App from "./App.js";
var _window = window,
  React = _window.React,
  ReactDOM = _window.ReactDOM;
var Component = React.Component,
  StrictMode = React.StrictMode;
// @ts-ignore
var createRoot = ReactDOM.createRoot;
var container = document.getElementById("app");
createRoot(container).render( /*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(App, null)));
import App from './App.js';
const { React, ReactDOM } = window;
const { Component, StrictMode } = React;
const { createRoot } = ReactDOM;
const container = document.getElementById('app');
createRoot(container).render(React.createElement(StrictMode, null,
    React.createElement(App, null)));
//# sourceMappingURL=main.js.map
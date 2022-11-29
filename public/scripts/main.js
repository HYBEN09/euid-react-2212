import { addEvents } from './addEvents.js';
const rootElement = document.documentElement;
const logoElement = document.querySelector('.logo');
const countElement = document.querySelector('.hover-count');
let hoverCount = 0;
addEvents(logoElement, {
    mouseenter() {
        rootElement.style.setProperty('--animate', 'paused');
        if (countElement !== null) {
            countElement.textContent = `${++hoverCount}`;
        }
    },
    mouseleave() {
        rootElement.style.setProperty('--animate', 'running');
    },
});

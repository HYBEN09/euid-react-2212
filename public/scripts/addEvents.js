export function addEvents(element, eventMap) {
    for (const [eventType, eventListener] of Object.entries(eventMap)) {
        element.addEventListener(eventType, eventListener);
    }
}

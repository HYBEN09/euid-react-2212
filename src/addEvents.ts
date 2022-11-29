export function addEvents(element: Element, eventMap: { [ key : string ]:() => void}) {
  for (const [eventType, eventListener] of Object.entries(eventMap)) {
    element.addEventListener(eventType, eventListener);
  }
}

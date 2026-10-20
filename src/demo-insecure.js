/* global window, URLSearchParams */
/** Ejemplo seguro: el nombre se inserta como texto, nunca como HTML. */
export function renderGreetingInsecure(outputElement) {
  const name = new URLSearchParams(window.location.search).get('name') ?? '';
  outputElement.textContent = `¡Hola, ${name}!`;
}

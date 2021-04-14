/**
 * @source https://gomakethings.com/how-to-get-the-first-and-last-focusable-elements-in-the-dom/
 */

export default function (element = document) {
  return element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
}

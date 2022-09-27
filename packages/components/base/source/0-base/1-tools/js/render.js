const parser = new DOMParser();

export function render(htmlString, root) {
  const doc = parser.parseFromString(htmlString, 'text/html');
  return [...doc.body.children].map((element) => root.appendChild(element));
}
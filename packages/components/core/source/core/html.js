import htm from 'htm';
import vhtml from 'vhtml';

export function render(htmlString, root) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return [...doc.body.children].map((element) => root.appendChild(element));
}
export const html = htm.bind(vhtml);

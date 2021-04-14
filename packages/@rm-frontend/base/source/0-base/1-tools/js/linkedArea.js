export default function linkedArea(area, link) {
  if (!(area && link)) {
    return;
  }

  const linkUrl = link.getAttribute('href');
  const linkTarget = link.getAttribute('target');

  if (linkUrl) {
    area.addEventListener('click', (event) => {
      // execute only, if clicked element is NOT a link
      // (if it's a link, the browser will handle the click)
      if (!event.target.closest('a, button')) {
        const target =
          linkTarget ||
          ((event.shiftKey || event.ctrlKey || event.metaKey) && '_blank') ||
          '_self';
        window.open(linkUrl, target).opener = null;
      }
    });
  }
}

import { domLoaded } from '../core/domLoaded.js';

domLoaded(() => {
  if (!('CSSContainerRule' in window)) {
    const attribute = 'min-width';
    const prop = '_cq';
    const re =
      /@container\s*\(min-width:\s*(?<breakpoint>.*)px\)\s*\{\s*(?<selector>.*)\s*\{\s*(?<css>.*;?)\s*\}/gm;
    const styleElm = document.createElement('style');
    styleElm.id = 'container-queries';

    const RO = new ResizeObserver((entries) =>
      entries.forEach((entry) => {
        const elm = entry.target;
        const matchingBreakpoints = elm[prop].filter(
          (item: number) => item <= entry.contentRect.width
        );
        elm.setAttribute(attribute, matchingBreakpoints.join(' '));
      })
    );

    const parse = (rules: string) =>
      [...rules.matchAll(re)].forEach((match) => {
        const selector = match.groups.selector.trim();
        const bp = Number(match.groups.breakpoint);
        styleElm.innerHTML += `${selector}[${attribute}~="${bp}"]{${match.groups.css}}\n`;

        document.querySelectorAll(selector).forEach((elm) => {
          elm[prop] ??= [];
          if (elm[prop].indexOf(bp) < 0) {
            elm[prop].push(bp);
          }
          RO.observe(elm);
        });
      });

    [...document.styleSheets].forEach((sheet) =>
      sheet.href
        ? fetch(sheet.href)
            .then((css) => css.text())
            .then(parse)
        : parse((sheet.ownerNode as Element).innerHTML)
    );
    document.head.appendChild(styleElm);
  }
});

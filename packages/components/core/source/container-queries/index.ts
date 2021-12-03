import { inBrowser, domLoaded } from '../core/domLoaded.js';

if (inBrowser && !('CSSContainerRule' in window)) {
  const attribute = 'min-width';
  const prop = '_cq';
  const containerRe =
    /@container\s*\(min-width:\s*(?<breakpoint>.*)px\)\s*\{\s*(?<rules>(?:[^{]*\{[^}]*\})*)\s*\}/gm;
  const ruleRe =
    /\s*(?<containerSelector>[^{\s>+~]*)(?<childSelector>[^{]*)\{\s*(?<css>[^}]*)\s*\}/gm;
  const styleElm = document.createElement('style');
  styleElm.id = 'container-queries';

  const selectorsToObserve: Record<string, number[]> = {};

  const RO = new ResizeObserver((entries) =>
    entries.forEach((entry) => {
      const element = entry.target;
      const matchingBreakpoints = element[prop].filter(
        (item: number) => item <= entry.contentRect.width
      );
      element.setAttribute(attribute, matchingBreakpoints.join(' '));
    })
  );

  const observe = (element: Element, breakpoints: number[]) => {
    element[prop] = breakpoints;
    RO.observe(element);
  };

  const parseStyleSheet = (rules: string) =>
    [...rules.matchAll(containerRe)].forEach((containerMatch) => {
      const bp = Number(containerMatch.groups.breakpoint);
      [...containerMatch.groups.rules.matchAll(ruleRe)].forEach((ruleMatch) => {
        const { containerSelector, childSelector, css } = ruleMatch.groups;
        styleElm.innerHTML += `${containerSelector}[${attribute}~="${bp}"]${childSelector}{${css}}\n`;

        selectorsToObserve[containerSelector] ??= [];
        if (selectorsToObserve[containerSelector].indexOf(bp) < 0) {
          selectorsToObserve[containerSelector].push(bp);
        }

        document
          .querySelectorAll(containerSelector)
          .forEach((element) =>
            observe(element, selectorsToObserve[containerSelector])
          );
      });
    });

  domLoaded(() => {
    [...document.styleSheets].forEach((sheet) =>
      sheet.href
        ? fetch(sheet.href)
            .then((css) => css.text())
            .then(parseStyleSheet)
        : parseStyleSheet((sheet.ownerNode as Element).innerHTML)
    );

    new MutationObserver((records) => {
      const selectors = Object.keys(selectorsToObserve);
      records.forEach((record) =>
        record.addedNodes.forEach((added) => {
          if (added.nodeType === Node.ELEMENT_NODE) {
            [
              <Element>added,
              ...(<Element>added).querySelectorAll(selectors.join()),
            ].forEach((element) =>
              selectors
                .filter((selector) => element.matches(selector))
                .forEach((containerSelector) =>
                  observe(element, selectorsToObserve[containerSelector])
                )
            );
          }
        })
      );
    }).observe(document, {
      childList: true,
      subtree: true,
    });

    document.head.appendChild(styleElm);
  });
}

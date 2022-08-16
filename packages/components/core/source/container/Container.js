import { inBrowser, domLoaded } from '../core/domLoaded';
import { Component } from '../component/Component';
import { define } from '../component/define';

if (inBrowser && !('CSSContainerRule' in window)) {
  const rangeAttribute = { min: 'min-width', max: 'max-width' };
  const minProp = '_cq-min';
  const maxProp = '_cq-max';
  // @see https://regex101.com/r/dVEbYv/1
  const containerRe =
    /@container (?<name>\S+) \((?<range>min|max)-width:\s*(?<breakpoint>\d*)px\)\s*\{(?<rules>(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*)\}/gm;
  // @see https://regex101.com/r/TsRNow/2
  const ruleRe = /\s*(?<selector>[^{]*)\{\s*(?<css>[^}]*)\s*\}/gm;
  const styleElm = document.createElement('style');
  styleElm.id = 'ks-container-queries';

  const containers = {};

  const parseStyleSheet = (rawRules) =>
    Array.from(rawRules.matchAll(containerRe)).forEach((containerMatch) => {
      const { name, breakpoint, rules, range } = containerMatch.groups;
      const containerSelector = `.l-container${name ? `--${name}` : ''}`;
      const bp = Number(breakpoint);
      Array.from(rules.matchAll(ruleRe)).forEach((ruleMatch) => {
        const { selector, css } = ruleMatch.groups;
        const containedSelector = selector
          .split(',')
          .map(
            (s) =>
              `${containerSelector}[${rangeAttribute[range]}~="${bp}"] ${s}`
          )
          .join();
        styleElm.innerHTML += `${containedSelector}{${css}}\n`;

        containers[containerSelector] ??= { min: new Set(), max: new Set() };
        containers[containerSelector][range].add(bp);
      });
    });

  const RO = new ResizeObserver((entries) =>
    entries.forEach((entry) => {
      const element = entry.target;

      element.setAttribute(
        rangeAttribute.min,
        element[minProp]
          .filter((item) => item <= entry.contentRect.width)
          .join(' ')
      );
      element.setAttribute(
        rangeAttribute.max,
        element[maxProp]
          .filter((item) => item > entry.contentRect.width)
          .join(' ')
      );
    })
  );

  class Container extends Component {
    static identifier = 'base.container';

    constructor(element) {
      super(element);

      const containerSelector = Object.keys(containers).find((selector) =>
        element.matches(selector)
      );

      if (containerSelector) {
        element[minProp] = Array.from(containers[containerSelector].min);
        element[maxProp] = Array.from(containers[containerSelector].max);
        RO.observe(element);
      }
    }
  }

  domLoaded(() => {
    Promise.all(
      Array.from(document.styleSheets).map((sheet) =>
        sheet.href
          ? fetch(sheet.href)
              .then((css) => css.text())
              .then(parseStyleSheet)
          : parseStyleSheet(sheet.ownerNode.innerHTML)
      )
    ).then(() => {
      document.head.appendChild(styleElm);
      define(Container.identifier, Container);
    });
  });
}

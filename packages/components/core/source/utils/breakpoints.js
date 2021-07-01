import debounce from 'lodash-es/debounce';
import { domLoaded } from '../core/domLoaded';

const breakpointEvents = {
  change: 'core.breakpoint.change',
};

const includeMediaExport = (() => {
  let breakpoints = {};
  domLoaded(() => {
    const breakpointChangePublisher = debounce(
      () => window.rm.radio.emit(breakpointEvents.change),
      80
    );
    try {
      const raw = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--breakpoints');
      breakpoints = Object.entries(JSON.parse(raw)).reduce(
        (prev, [breakpoint, value]) => {
          prev[breakpoint] = window.matchMedia(`(min-width:${value})`);
          prev[breakpoint].addEventListener(
            'change',
            breakpointChangePublisher
          );
          return prev;
        },
        {}
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  });

  const isBreakpointActive = (breakpoint) =>
    breakpoint in breakpoints && breakpoints[breakpoint].matches;

  const isBreakpointNotActive = (breakpoint) => !isBreakpointActive(breakpoint);

  return {
    greaterThan: isBreakpointActive,
    lessThan: isBreakpointNotActive,
  };
})();

export { breakpointEvents, includeMediaExport as breakpoints };

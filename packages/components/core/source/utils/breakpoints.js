import debounce from 'lodash-es/debounce';
import { domLoaded } from '../core/domLoaded';

export const breakpointEvents = {
  change: 'core.breakpoint.change',
};
const removeQuotes = (string) =>
  // removes backslashes and leading & trailing quotes
  string.replace(/\\|^\s*['"]|['"]\s*$/g, '');

domLoaded(() => {
  const breakpointChangePublisher = debounce(
    () => window.rm.radio.emit(breakpointEvents.change),
    80
  );
  try {
    const raw = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--breakpoints');
    Object.values(JSON.parse(removeQuotes(raw))).forEach((value) =>
      window
        .matchMedia(`(min-width:${value})`)
        .addEventListener('change', breakpointChangePublisher)
    );
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
});

import debounce from 'lodash-es/debounce';
import { domLoaded } from '../core/domLoaded';

export const breakpointEvents = {
  change: 'core.breakpoint.change',
};

domLoaded(() => {
  try {
    const raw = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--ks-breakpoints')
      // removes backslashes and leading & trailing quotes
      .replace(/\\|^\s*['"]|['"]\s*$/g, '');
    const media = Object.fromEntries(
      Object.entries(JSON.parse(raw)).map(([key, value]) => [
        key,
        window.matchMedia(`(min-width:${value})`),
      ])
    );
    const breakpointChangePublisher = debounce(
      () => window.rm.radio.emit(breakpointEvents.change, media),
      80
    );
    Object.values(media).forEach((mediaQuery) =>
      mediaQuery.addEventListener('change', breakpointChangePublisher)
    );
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
});

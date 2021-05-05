import im from 'include-media-export/include-media'; // https://github.com/eduardoboucas/include-media-export
import { domLoaded } from '../core/domLoaded';
import { windowEvents } from './window';

export const breakpointEvents = {
  change: 'core.breakpoint.change',
};

domLoaded(() => {
  im.setElement(document.body);
  let activeBreakpoint = im.getActive();

  im.setUpdateMode('manual');
  window.rm.radio.on(windowEvents.resize, () => {
    im.update();

    const currentBreakpoint = im.getActive();
    if (currentBreakpoint !== activeBreakpoint) {
      activeBreakpoint = currentBreakpoint;
      window.rm.radio.emit(breakpointEvents.change, activeBreakpoint);
    }
  });
});

export const breakpoints = im;

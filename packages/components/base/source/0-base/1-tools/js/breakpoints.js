import im from 'include-media-export/include-media'; // https://github.com/eduardoboucas/include-media-export
import { domLoaded } from '@rm-frontend/core';
import { events as windowEvents } from '../../2-generic/window/window';

export const events = {
  change: 'base.breakpoint.change',
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
      window.rm.radio.emit(events.change, activeBreakpoint);
    }
  });
});

export default im;

/* eslint-disable import/no-extraneous-dependencies */
import Core from '@glidejs/glide/src/index';
import Html from '@glidejs/glide/src/components/html';
import Transition from '@glidejs/glide/src/components/transition';
import Direction from '@glidejs/glide/src/components/direction';
import Peek from '@glidejs/glide/src/components/peek';
import Sizes from '@glidejs/glide/src/components/sizes';
import Gaps from '@glidejs/glide/src/components/gaps';
import Move from '@glidejs/glide/src/components/move';
import Resize from '@glidejs/glide/src/components/resize';
import Build from '@glidejs/glide/src/components/build';
import Swipe from '@glidejs/glide/src/components/swipe';
import Images from '@glidejs/glide/src/components/images';
import Anchors from '@glidejs/glide/src/components/anchors';
import Controls from '@glidejs/glide/src/components/controls';
import Autoplay from '@glidejs/glide/src/components/autoplay';
import Breakpoints from '@glidejs/glide/src/components/breakpoints';

import Translate from '@glidejs/glide/src/components/translate';
import Run from '@glidejs/glide/src/components/run';
import Clones from './Clones';

import ArrowPosition from './ArrowPosition';
import Nav from './Nav';

const COMPONENTS = {
  // Required
  Html,
  Translate,
  Transition,
  Direction,
  Peek,
  Sizes,
  Gaps,
  Move,
  Clones,
  Resize,
  Build,
  Run,

  // Optional
  Swipe,
  Images,
  Anchors,
  Controls,
  Autoplay,
  Breakpoints,

  // Custom
  ArrowPosition,
  Nav,
};

export default class Glide extends Core {
  mount(extensions = {}) {
    return super.mount({ ...COMPONENTS, ...extensions });
  }
}

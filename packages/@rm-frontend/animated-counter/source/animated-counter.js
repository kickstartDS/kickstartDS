import { registerModule } from '@rm-frontend/core';

import AnimatedCounter from './2-molecules/animated-counter/AnimatedCounter';

registerModule({
  [AnimatedCounter.identifier]: AnimatedCounter,
});

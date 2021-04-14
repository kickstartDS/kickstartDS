import { registerModule } from '@rm-frontend/core';

// #if env.API === 'true'
import './api';
// #endif

import Deals from './2-molecules/deals/deals';

registerModule({
  [Deals.identifier]: Deals,
});

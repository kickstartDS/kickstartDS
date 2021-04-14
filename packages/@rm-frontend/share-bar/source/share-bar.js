import { registerModule } from '@rm-frontend/core';
import { identifier as shareBarIdentifier } from './2-molecules/share-bar/ShareBar.desc';
import lazyShareBar from './2-molecules/share-bar/lazyShareBar';

registerModule({
  [shareBarIdentifier]: lazyShareBar,
});

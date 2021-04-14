import { registerModule } from '@rm-frontend/core';

import ProductSlider, {
  identifier as productSliderIdentifier,
} from './2-molecules/product/product-slide/ProductSlider';
import ProductCard from './3-organisms/product/product-cards/ProductCard';
import ProductTeaser from './3-organisms/product/product-teaser/ProductTeaser';

registerModule({
  [ProductCard.identifier]: ProductCard,
  [ProductTeaser.identifier]: ProductTeaser,
  [productSliderIdentifier]: ProductSlider,
});

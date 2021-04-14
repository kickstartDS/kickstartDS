import { registerModule } from '@rm-frontend/core';

// #if env.API === 'true'
import './api';
// #endif

import ShortlistCount from './1-atoms/real-estate/shortlist/ShortlistCount';
import ShortlistToggle from './1-atoms/real-estate/shortlist/ShortlistToggle';
import RealEstateFilter from './2-molecules/real-estate/real-estate-filter/RealEstateFilter';
import RealEstateCard from './2-molecules/real-estate/real-estate-card/RealEstateCard';
import RealEstateActions from './2-molecules/real-estate/real-estate-actions/RealEstateActions';
import { identifier as RealEstateCardsSliderIdentifier } from './3-organisms/real-estate/real-estate-cards-slider/RealEstateCardSlider.desc';
import RealEstateCardsSlider from './3-organisms/real-estate/real-estate-cards-slider/RealEstateCardsSlider';

registerModule({
  [ShortlistCount.identifier]: ShortlistCount,
  [ShortlistToggle.identifier]: ShortlistToggle,
  [RealEstateFilter.identifier]: RealEstateFilter,
  [RealEstateCard.identifier]: RealEstateCard,
  [RealEstateActions.identifier]: RealEstateActions,
  [RealEstateCardsSliderIdentifier]: RealEstateCardsSlider,
});

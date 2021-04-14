import { registerModule } from '@rm-frontend/core';

// #if env.API === 'true'
import './api';
// #endif

import EventLatestItem from './2-molecules/event/event-item/EventItem';
import EventFilterForm from './2-molecules/event/event-filter-options/EventFilterForm';
import EventDetail from './2-molecules/event/event-detail-location-item/EventDetail';

registerModule({
  [EventLatestItem.identifier]: EventLatestItem,
  [EventFilterForm.identifier]: EventFilterForm,
  [EventDetail.identifier]: EventDetail,
});

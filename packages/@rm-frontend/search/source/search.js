import { registerModule } from '@rm-frontend/core';

// #if env.API === 'true'
import './api';
// #endif

import SearchForm from './2-molecules/search/search-form/SearchForm';
import SearchFilter from './2-molecules/search/search-filter/SearchFilter';
import SearchOverlay from './3-organisms/search/search-overlay/SearchOverlay';
import { identifier as solrAutocompleteIdentifier } from './2-molecules/solr/SolrAutocomplete.desc';
import lazySolrAutocomplete from './2-molecules/solr/lazySolrAutocomplete';

registerModule({
  [SearchForm.identifier]: SearchForm,
  [SearchOverlay.identifier]: SearchOverlay,
  [SearchFilter.identifier]: SearchFilter,
  [solrAutocompleteIdentifier]: lazySolrAutocomplete,
});

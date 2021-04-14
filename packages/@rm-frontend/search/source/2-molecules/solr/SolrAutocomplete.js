import Autocomplete from 'awesomplete';
import debounce from 'lodash-es/debounce';
import noop from 'lodash-es/noop';
import { Component } from '@rm-frontend/core';
import { identifier } from './SolrAutocomplete.desc';

export default class SolrAutocomplete extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    this.endpoint = element.dataset.suggest;
    const form = element.closest('.search__form');
    this.form = form;
    this.controller = { abort: noop };

    this.auto = new Autocomplete(element, {
      filter() {
        return true;
      },
      sort: false,
      container() {
        return form;
      },
    });

    element.addEventListener('awesomplete-selectcomplete', () => {
      this.form.submit();
    });

    element.addEventListener('input', this);
  }

  oninput() {
    debounce(() => {
      const { value } = this.element;
      const endpoint = this.endpoint.replace('<term>', value.toLowerCase());
      this.controller.abort();
      this.controller = new AbortController();
      fetch(endpoint, { signal: this.controller.signal })
        .then((response) => response.json())
        .then((data) => {
          const results = data.suggestions
            ? Object.entries(data.suggestions)
                .sort(([, aWeight], [, bWeight]) => {
                  if (aWeight > bWeight) return -1;
                  if (aWeight < bWeight) return 1;
                  return 0;
                })
                .map(([match]) => match)
            : [];
          this.auto.list = results;
          this.auto.evaluate();
        })
        .catch(noop);
    }, 200).call(this);
  }
}

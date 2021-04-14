import { Component } from '@rm-frontend/core';

export default class SearchForm extends Component {
  static identifier = 'search.form';

  static actions = {
    focusSearchInput: `${SearchForm.identifier}.focusSearchInput`,
  };

  constructor(element) {
    super(element);

    this.searchInput = element.querySelector('.search__input');

    // Set some events for styling & set focus to search-input
    this.element.addEventListener('focusin', this);
    this.element.addEventListener('focusout', this);
    this.focusSearchInput();
  }

  onfocusin() {
    this.element.classList.add('search__form--focussed');
  }

  onfocusout() {
    this.element.classList.remove('search__form--focussed');
  }

  focusSearchInput() {
    this.searchInput.focus();
  }
}

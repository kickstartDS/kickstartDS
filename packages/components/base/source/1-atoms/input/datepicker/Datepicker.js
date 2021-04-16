import Pikaday from 'pikaday';
import { Component } from '@rm-frontend/core';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import { getLang, isLang } from '../../../0-base/1-tools/js/language';
import dateFormat from '../../../0-base/1-tools/js/date-format';
import config from '../../../0-base/0-settings/datepicker';
import { identifier, events, actions } from './Datepicker.desc';

const localDateToUtcEpoch = (date) =>
  Math.floor((date.valueOf() - date.getTimezoneOffset() * 60 * 1000) / 1000);

export default class Datepicker extends Component {
  static identifier = identifier;

  static events = events;

  static actions = actions;

  constructor(element) {
    super(element);

    this.hiddenField = element.querySelector('.datepicker__value');
    const initialValue = this.hiddenField.value;

    const minDate = element.dataset.min;
    const maxDate = element.dataset.max;
    const dateRanges = JSON.parse(element.dataset.dateRanges || null);

    // disable all dates EXCEPT the ranges in `dateRanges`
    const disableDayFn = dateRanges
      ? function disableDayFn(date) {
          let disable = true;

          dateRanges.forEach(([startTimestamp, endTimestamp]) => {
            if (disable) {
              const start = startOfDay(startTimestamp * 1000);
              const end = endOfDay(endTimestamp * 1000);

              disable =
                !isWithinInterval(date, { start, end }) ||
                (this.minDate && this.minDate < start && start <= date) ||
                (this.maxDate && this.maxDate > end && end >= date);
            }
          });

          return disable;
        }
      : false;

    this.resetBtn = element.querySelector('.datepicker__clear-button');
    this.input = element.querySelector('.input-field');
    this.picker = new Pikaday({
      field: this.input,
      firstDay: 1, // Monday
      setDefaultDate: false,
      format: isLang('de') ? 'DD.MM.YYYY' : 'YYYY-MM-DD',
      toString: dateFormat,
      i18n: config[getLang()],
      theme: config.theme,
      onSelect: () => {
        this.changed();
      },
      disableDayFn,
    });

    if (initialValue) {
      this.picker.setDate(new Date(initialValue * 1000));
    }

    if (minDate) {
      this.setMinDate(new Date(minDate * 1000));
    }

    if (maxDate) {
      this.setMaxDate(new Date(maxDate * 1000));
    }

    this.init();
  }

  init() {
    this.changed();
    this.resetBtn.addEventListener('click', this);
  }

  onclick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.picker.setDate(null);
    this.changed();
  }

  changed() {
    const date = this.picker.getDate();
    this.resetBtn.style.display = date ? 'block' : 'none';
    this.hiddenField.value = date ? localDateToUtcEpoch(date) : '';
    window.rm.radio.emit(Datepicker.events.change, {
      element: this.element,
      data: date,
    });
  }

  // actions
  setMinDate(date) {
    this.picker.setMinDate(date);
  }

  setMaxDate(date) {
    this.picker.setMaxDate(date);
  }

  setStartRange(date) {
    this.picker.setStartRange(date);
  }

  setEndRange(date) {
    this.picker.setEndRange(date);
  }
}

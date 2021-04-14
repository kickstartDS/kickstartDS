import { Component } from '@rm-frontend/core';
import {
  events as datepickerEvents,
  actions as datepickerActions,
} from '../../1-atoms/input/datepicker/Datepicker.desc';

export default class DateRangePicker extends Component {
  static identifier = 'base.date-range-picker';

  static events = {
    validRange: 'base.date-range-picker.valid-range',
    invalidRange: 'base.date-range-picker.invalid-range',
  };

  constructor(element) {
    super(element);

    [this.startPicker, this.endPicker] = [
      ...element.querySelectorAll('[data-component="base.datepicker"]'),
    ];

    this.startDate = null;
    this.endDate = null;

    window.rm.radio.on(datepickerEvents.change, (_, { element: el, data }) => {
      if (el === this.startPicker) {
        this.startDate = data;
        this.updateStartDate();
      } else if (el === this.endPicker) {
        this.endDate = data;
        this.updateEndDate();
      }
    });
  }

  updateStartDate() {
    window.rm.radio.emit(datepickerActions.setStartRange, {
      element: this.startPicker,
      args: [this.startDate],
    });
    window.rm.radio.emit(datepickerActions.setStartRange, {
      element: this.endPicker,
      args: [this.startDate],
    });
    window.rm.radio.emit(datepickerActions.setMinDate, {
      element: this.endPicker,
      args: [this.startDate],
    });
    this.checkValidRange();
  }

  updateEndDate() {
    window.rm.radio.emit(datepickerActions.setEndRange, {
      element: this.startPicker,
      args: [this.endDate],
    });
    window.rm.radio.emit(datepickerActions.setEndRange, {
      element: this.endPicker,
      args: [this.endDate],
    });
    window.rm.radio.emit(datepickerActions.setMaxDate, {
      element: this.startPicker,
      args: [this.endDate],
    });
    this.checkValidRange();
  }

  checkValidRange() {
    if (this.startDate && this.endDate) {
      window.rm.radio.emit(DateRangePicker.events.validRange);
    } else {
      window.rm.radio.emit(DateRangePicker.events.invalidRange);
    }
  }
}

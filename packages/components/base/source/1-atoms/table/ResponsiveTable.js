import { Component, define } from '@kickstartds/core/lib/core';

export default class ResponsiveTable extends Component {
  static identifier = 'base.responsive-table';

  constructor(element) {
    super(element);

    if (element.querySelector('thead')) {
      const headers = [...element.querySelectorAll('th')];
      const thValues = headers.map((header) => header.textContent);
      const cells = element.querySelectorAll('tbody td');

      cells.forEach((cell, index) => {
        cell.setAttribute('data-th', thValues[index % thValues.length]);
      });
    }
  }
}

define(ResponsiveTable.identifier, ResponsiveTable);

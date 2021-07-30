import { Component } from '@kickstartds/core/component';

export default class ResponsiveTable extends Component {
  static identifier = 'base.responsive-table';

  constructor(element) {
    super(element);

    this.table = this.element.querySelector('table');
    this.hasHead = !!this.table.querySelector('thead');
    this.headers = [...this.table.querySelectorAll('th')];
    this.cells = this.table.querySelectorAll('tbody td');

    this.init();
  }

  init() {
    if (this.hasHead) {
      const thValues = this.headers.map((header) => header.textContent);

      this.cells.forEach((cell, index) => {
        cell.setAttribute('data-th', thValues[index % thValues.length]);
      });
    }
  }
}

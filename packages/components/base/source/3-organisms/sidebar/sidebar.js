import SimpleBar from 'simplebar';
import { Component } from '@kickstartds/core/component';
import { fadeIn, fadeOut } from '../../0-base/1-tools/js/fade';
import { identifier, actions } from './Sidebar.desc';
import SidebarToggle from './SidebarToggle';

export default class Sidebar extends Component {
  static identifier = identifier;

  static actions = actions;

  constructor(element) {
    super(element);

    this.overlay = document.querySelector('.sidebar-overlay');

    this.initScrollBars();

    this.overlay.addEventListener('click', this);
  }

  initScrollBars() {
    const content = this.element.querySelector('#sidebar-content');

    if (content) {
      new SimpleBar(content); // eslint-disable-line no-new
    }
  }

  // eslint-disable-next-line class-methods-use-this
  onclick() {
    window.rm.radio.emit(SidebarToggle.actions.close);
  }

  showOverlay() {
    fadeIn(this.overlay);
  }

  hideOverlay() {
    fadeOut(this.overlay);
  }
}

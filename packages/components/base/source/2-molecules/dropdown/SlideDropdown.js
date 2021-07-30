import { slideDown, slideUp } from '@kickstartds/core/utils';
import Dropdown from './Dropdown';

export default class SlideDropdown extends Dropdown {
  static identifier = 'base.slide-dropdown';

  static actions = {
    close: `${SlideDropdown.identifier}.close`,
  };

  constructor(element) {
    super(element);

    this.trigger = element.querySelector('summary');
    this.content = this.trigger.nextElementSibling;

    if (this.isOpen) {
      this.element.classList.add('dropdown--is-open');
    }

    this.trigger.addEventListener('click', this);
  }

  onclick(event) {
    event.preventDefault();
    super.toggle();
  }

  open(duration) {
    super.open();
    this.element.classList.add('dropdown--is-open');
    this.content.style.height = 0;
    slideDown(this.content, duration);
  }

  close(duration) {
    this.element.classList.remove('dropdown--is-open');
    slideUp(this.content, duration).then(() => super.close());
  }
}

import { Component, registerModule } from '@rm-frontend/core';

const identifier = 'base.tag-label';
export default class TagLabel extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    this.removeBtn = element.querySelector('.tag-label__remove-btn');

    if (this.removeBtn) {
      this.removeBtn.addEventListener('click', this);
    }
  }

  onclick() {
    this.element.parentNode.removeChild(this.element);
  }
}

registerModule({
  [identifier]: TagLabel,
});

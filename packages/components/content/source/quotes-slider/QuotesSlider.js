import Slider from '../slider/Slider';

const identifier = 'content.quotes-slider';

export default class QuotesSlider extends Slider {
  static identifier = identifier;

  constructor(element) {
    const mainOptions = {
      perView: 1,
      gap: 16,
    };

    super(element, mainOptions);
  }
}

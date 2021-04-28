import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { LinkButton } from '@kickstartds/base/lib/link-button';
import { RichText } from '@kickstartds/base/lib/rich-text';
import { TextBox, Inbox } from './VisualProps';

interface IBox extends TextBox {
  inbox?: Inbox;
}

export const VisualBoxPartial: FunctionComponent<IBox> = ({
  inbox,
  indent,
  horizontal,
  vertical,
  style,
  headline,
  text,
  link,
}) => (
  <div
    className={classnames(
      'c-visual__content',
      horizontal && `c-visual__content--${horizontal}`,
      vertical !== 'center' && `c-visual__content--${vertical}`,
      {
        'c-visual__content--inbox': inbox,
        'c-visual__content--indent': indent,
      }
    )}
  >
    <div
      className={classnames(
        'c-visual__box',
        style && `c-visual__box--${style}`
      )}
    >
      {headline && <p className="c-visual__topic">{headline}</p>}

      {text && <RichText text={text} className="c-visual__text" />}

      {link && (
        <div className="c-visual__link">
          <LinkButton {...link} />
        </div>
      )}
    </div>
  </div>
);

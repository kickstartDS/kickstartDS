import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { LinkButton } from '@rm-frontend/base/lib/link-button';
import { RichText } from '@rm-frontend/base/lib/rich-text';
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
      'visual__content',
      horizontal && `visual__content--${horizontal}`,
      vertical !== 'center' && `visual__content--${vertical}`,
      {
        'visual__content--inbox': inbox,
        'visual__content--indent': indent,
      }
    )}
  >
    <div
      className={classnames('visual__box', style && `visual__box--${style}`)}
    >
      {headline && <p className="visual__topic">{headline}</p>}

      {text && <RichText text={text} className="visual__text" />}

      {link && (
        <div className="visual__link">
          <LinkButton {...link} />
        </div>
      )}
    </div>
  </div>
);

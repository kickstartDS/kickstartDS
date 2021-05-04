import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { LinkButton } from '@kickstartds/base/lib/link-button';
import { RichText } from '@kickstartds/base/lib/rich-text';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { TextBox, Inbox } from './VisualProps';

interface IBox extends TextBox {
  inbox?: Inbox;
  renderHeadline?: renderFn;
}

export const VisualBoxPartial: FunctionComponent<IBox> = ({
  inbox,
  indent,
  horizontal,
  vertical,
  background,
  headline,
  text,
  link,
  renderHeadline = defaultRenderFn,
}) => (
  <div
    className={classnames(
      'c-visual__content',
      horizontal && `c-visual__content--${horizontal}`,
      vertical && vertical !== 'center' && `c-visual__content--${vertical}`,
      {
        'c-visual__content--inbox': inbox,
        'c-visual__content--indent': indent,
      }
    )}
  >
    <div
      className={classnames(
        'c-visual__box',
        background && `c-visual__box--${background}`
      )}
    >
      {headline && (
        <p className="c-visual__topic">{renderHeadline(headline)}</p>
      )}

      {text && (
        <RichText
          text={text}
          className="c-visual__text"
          renderText={(t: string) => <pre>{t}</pre>}
        />
      )}

      {link && link.enabled && (
        <div className="c-visual__link">
          <LinkButton {...{ ...link, enabled: undefined }} />
        </div>
      )}
    </div>
  </div>
);

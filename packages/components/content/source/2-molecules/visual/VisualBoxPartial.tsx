import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { LinkButton } from '@kickstartds/base/lib/link-button';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import { renderTextFn } from '@kickstartds/core/lib/core';
import { Headline } from '@kickstartds/base/source/2-molecules/headline/HeadlineComponent';
import { TextBox, Inbox } from './VisualProps';

export interface RenderFunctions {
  renderText?: renderTextFn;
}

interface IBox extends TextBox {
  inbox?: Inbox;
}

export const VisualBoxPartial: FunctionComponent<IBox & RenderFunctions> = ({
  inbox,
  indent,
  horizontal,
  vertical,
  background,
  headline,
  text,
  link,
  renderText = richTextDefaultRenderFn,
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
        <Headline
          level="p"
          title="Lorem Ipsum dolor"
          align="left"
          className="c-visual__topic"
          {...headline}
        />
      )}

      {text && (
        <RichText
          text={text}
          className="c-visual__text"
          renderText={renderText}
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

import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Button } from '@kickstartds/base/lib/button';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import {
  renderFn,
  renderTextFn,
  defaultRenderFn,
} from '@kickstartds/core/lib/core';
import { Headline } from '@kickstartds/base/lib/headline';
import { TextBox, Inbox } from './VisualProps';

export interface RenderFunctions {
  renderHeadline?: renderFn;
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
  background = 'solid',
  headline,
  text,
  link,
  inverted = false,
  renderHeadline = defaultRenderFn,
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
    ks-inverted={inverted?.toString()}
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
          styleAs="h2"
          {...headline}
          align={headline.align || horizontal}
          renderContent={renderHeadline}
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
          <Button
            {...{
              ...link,
              enabled: undefined,
              inverted: link.inverted ?? !inverted,
            }}
          />
        </div>
      )}
    </div>
  </div>
);

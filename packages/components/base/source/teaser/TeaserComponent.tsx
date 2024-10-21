import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '../rich-text';
import { Button } from '../button';
import type { TeaserProps as TeaserSchemaProps } from './typing';
import { Headline } from '../headline';

export type TeaserProps = TeaserSchemaProps & {
  renderHeadline?: typeof defaultRenderFn;
  renderText?: typeof defaultRenderFn;
};

export const TeaserComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TeaserProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    headline,
    text,
    inverted,
    link,
    renderText = richTextDefaultRenderFn,
    renderHeadline = defaultRenderFn,
    className,
    children,
    component = 'base.teaser',
    ...props
  },
  ref
) => (
  <div
    className={classnames('c-teaser', className)}
    ref={ref}
    ks-inverted={inverted?.toString()}
    ks-component={component}
    {...props}
  >
    {children}
    <div
      className="c-teaser__body"
      hidden={!headline && !text && (!link || link.hidden)}
    >
      <div className="c-teaser__text">
        {renderHeadline(
          //TBD: topic
          <Headline className="c-teaser__headline" content={headline} />
        )}

        {text && (
          //TBD: Rich Text oder Copy? Ist hier die RichText Funktion aktiviert?
          <RichText
            className="c-teaser__copy"
            text={text}
            renderText={renderText}
          />
        )}
      </div>
      {link?.label ? (
        <div className="c-teaser__link" hidden={link.hidden}>
          <Button {...link} />
        </div>
      ) : (
        ''
      )}
    </div>
  </div>
);

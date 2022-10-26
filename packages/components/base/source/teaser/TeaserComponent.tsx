import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '../rich-text';
import { Button } from '../button';
import type { TeaserProps as TeaserSchemaProps } from './TeaserProps';

export type TeaserProps = TeaserSchemaProps & {
  renderTopic?: typeof defaultRenderFn;
  renderText?: typeof defaultRenderFn;
};

export const TeaserComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TeaserProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    topic,
    text,
    inverted,
    link,
    renderText = richTextDefaultRenderFn,
    renderTopic = defaultRenderFn,
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
      hidden={!topic && !text && (!link || link.hidden)}
    >
      <div className="c-teaser__text">
        <p className="c-teaser__topic">{renderTopic(topic)}</p>
        {text && <RichText text={text} renderText={renderText} />}
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

import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/core';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '../../1-atoms/rich-text';
import { Button } from '../../1-atoms/button';
import { type TeaserProps as TeaserSchemaProps } from './TeaserProps';

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
    ...props
  },
  ref
) => (
  <div
    className={classnames('c-teaser', className)}
    data-component="base.teaser"
    ref={ref}
    ks-inverted={inverted?.toString()}
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

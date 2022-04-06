import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '../../1-atoms/rich-text';
import { LinkButton } from '../../1-atoms/button/link-button';
import { type TeaserProps as TeaserSchemaProps } from './TeaserProps';

export type TeaserProps = TeaserSchemaProps & {
  renderTopic?: renderFn;
  renderText?: renderFn;
};

export const TeaserComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TeaserProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    topic,
    text,
    darkStyle,
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
    className={classnames(
      'c-teaser',
      {
        'c-teaser--style-dark': darkStyle,
      },
      className
    )}
    data-component="base.teaser"
    ref={ref}
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
          <LinkButton {...link} />
        </div>
      ) : (
        ''
      )}
    </div>
  </div>
);

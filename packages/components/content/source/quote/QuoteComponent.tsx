import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Picture } from '@kickstartds/base/lib/picture';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import type { QuoteProps as QuoteSchemaProps } from './QuoteProps';

export type QuoteProps = QuoteSchemaProps & {
  renderText?: typeof richTextDefaultRenderFn;
  renderSource?: typeof defaultRenderFn;
  renderByline?: typeof defaultRenderFn;
};

export const QuoteComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  QuoteProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    image,
    text,
    source,
    byline,
    renderText = richTextDefaultRenderFn,
    renderSource = defaultRenderFn,
    renderByline = defaultRenderFn,
    className,
    ...props
  },
  ref
) => (
  <div className={classnames('c-quote', className)} ref={ref} {...props}>
    {image && (
      <div className="c-quote__image">
        <Picture src={image} />
      </div>
    )}
    <div className="c-quote__content">
      <RichText text={text} renderText={renderText} className="c-quote__text" />

      {source && <div className="c-quote__source">{renderSource(source)}</div>}

      {byline && <div className="c-quote__byline">{renderByline(byline)}</div>}
    </div>
  </div>
);

import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createContext,
} from 'react';
import classnames from 'classnames';
import { withContainer } from '@kickstartds/core/lib/container';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Picture } from '@kickstartds/base/lib/picture';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import { QuoteProps } from './QuoteProps';
import './quote.scss';

interface RenderFunctions {
  renderText?: renderFn;
  renderSource?: renderFn;
  renderByline?: renderFn;
}

const QuoteComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  QuoteProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
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

export const QuoteContextDefault = forwardRef(QuoteComponent);
export const QuoteContext = createContext(QuoteContextDefault);
export const Quote = withContainer('quote', QuoteContext);

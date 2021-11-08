import {
  createContext,
  FunctionComponent,
  useContext,
  HTMLAttributes,
  createElement,
} from 'react';
import classnames from 'classnames';
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

const QuoteComponent: FunctionComponent<
  QuoteProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({
  image,
  text,
  source,
  byline,
  renderText = richTextDefaultRenderFn,
  renderSource = defaultRenderFn,
  renderByline = defaultRenderFn,
  className,
  ...props
}) => (
  <div className={classnames('c-quote', className)} {...props}>
    {image && (
      <div className="c-quote__image-wrap">
        <div className="c-quote__image">
          <Picture src={image} />
        </div>
      </div>
    )}
    <div className="c-quote__content">
      <RichText text={text} renderText={renderText} className="c-quote__text" />

      {source && <div className="c-quote__source">{renderSource(source)}</div>}

      {byline && <div className="c-quote__byline">{renderByline(byline)}</div>}
    </div>
  </div>
);

export const QuoteContextDefault = QuoteComponent;
export const QuoteContext = createContext(QuoteContextDefault);
export const Quote: typeof QuoteContextDefault = (props) =>
  createElement(useContext(QuoteContext), props);

import { createContext, FunctionComponent, useContext } from 'react';
import { format } from 'date-fns';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Picture } from '@kickstartds/base/lib/picture';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import { QuoteProps } from './QuoteProps';
import './quote.scss';

const defaultDateRenderFn: renderFn = (t) =>
  format(new Date(String(t)), 'dd.MM.yyyy');

interface RenderFunctions {
  renderText?: renderFn;
  renderSource?: renderFn;
  renderDate?: renderFn;
}

const QuoteComponent: FunctionComponent<QuoteProps & RenderFunctions> = ({
  image,
  text,
  source,
  date,
  renderText = richTextDefaultRenderFn,
  renderSource = defaultRenderFn,
  renderDate = defaultDateRenderFn,
}) => (
  <div className="c-quote">
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

      {date && <div className="c-quote__date">{renderDate(date)}</div>}
    </div>
  </div>
);

export const QuoteContextDefault = QuoteComponent;
export const QuoteContext = createContext(QuoteContextDefault);
export const Quote: typeof QuoteContextDefault = (props) => {
  const Component = useContext(QuoteContext);
  return <Component {...props} />;
};

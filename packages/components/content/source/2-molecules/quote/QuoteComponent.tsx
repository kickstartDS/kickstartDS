import { FunctionComponent } from 'react';
import { format } from 'date-fns';
import { Picture } from '@kickstartds/base/lib/picture';
import { QuoteProps } from './QuoteProps';
import './quote.scss';

export const Quote: FunctionComponent<QuoteProps> = ({
  image,
  text,
  source,
  date,
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
      <div className="c-quote__text">{text}</div>

      {source && <div className="c-quote__source">{source}</div>}

      {date && (
        <div className="c-quote__date">
          {format(new Date(date), 'dd.MM.yyyy')}
        </div>
      )}
    </div>
  </div>
);

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
  <div className="quote">
    {image && (
      <div className="quote__image-wrap">
        <div className="quote__image">
          <Picture src={image} />
        </div>
      </div>
    )}
    <div className="quote__content">
      <div className="quote__text">{text}</div>

      {source && <div className="quote__source">{source}</div>}

      {date && (
        <div className="quote__date">
          {format(new Date(date), 'dd.MM.yyyy')}
        </div>
      )}
    </div>
  </div>
);

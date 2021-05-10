import { FunctionComponent } from 'react';
import { format } from 'date-fns';
import { TagLabelContainer } from '@kickstartds/base/lib/tag-label-container';
import { Link } from '@kickstartds/base/lib/link';
import { LinkButton } from '@kickstartds/base/lib/link-button';
import { Picture } from '@kickstartds/base/lib/picture';
import { NewsLatestItemProps } from './NewsLatestItemProps';
import './news-latest.scss';

export const NewsLatestItem: FunctionComponent<NewsLatestItemProps> = ({
  image,
  date,
  link,
  title,
  body,
  categories = [],
  index,
}) => (
  <article className="news-latest__item">
    {image && (
      <div className="news-latest__item__image">
        <Picture src={image} alt={body} />
      </div>
    )}

    <div className="news-latest__item__meta">
      {date && (
        <time
          dateTime={format(new Date(date), 'yyy-MM-dd')}
          className="news-latest__item__date"
        >
          {format(new Date(date), 'dd.MM.yyyy')}
        </time>
      )}
      {categories.length ? (
        <TagLabelContainer
          tagLabels={categories.map((category) => ({ ...category, size: 's' }))}
        />
      ) : (
        ''
      )}
    </div>

    <div className="news-latest__item__body">
      <h2 className="news-latest__item__headline" id={`news-header-${index}`}>
        <Link href={link}>{title}</Link>
      </h2>
      <p className="news-latest__item__teaser">{body}</p>
      <div className="news-latest__item__more">
        <LinkButton
          href={link}
          label="weiter zum Newseintrag"
          id={`news-link-more-${index}`}
          aria-labelledby={`news-link-more-${index} news-header-${index}`}
          icon={{ icon: 'chevron-right' }}
          iconAfter={true}
          variant="clear"
          size="medium"
        />
      </div>
    </div>
  </article>
);

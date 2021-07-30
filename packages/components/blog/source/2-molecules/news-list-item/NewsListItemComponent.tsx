import { FunctionComponent } from 'react';
import { format } from 'date-fns';
import { RichText } from '@kickstartds/base/rich-text';
import { TagLabelContainer } from '@kickstartds/base/tag-label-container';
import { Link } from '@kickstartds/base/link';
import { LinkButton } from '@kickstartds/base/link-button';
import { Picture } from '@kickstartds/base/picture';
import { NewsListItemProps } from './NewsListItemProps';
import './news-list.scss';

// TODO readd: {{> molecules-tag-label-container @root}}
export const NewsListItem: FunctionComponent<NewsListItemProps> = ({
  image,
  date,
  link,
  title,
  body,
  categories = [],
  index,
}) => (
  <article className="news-list__item">
    <div className="news-list__item__header">
      <div className="news-list__item__meta">
        {date && (
          <time
            dateTime={format(new Date(date), 'yyy-MM-dd')}
            className="news-list__item__date"
          >
            {format(new Date(date), 'dd.MM.yyyy')}
          </time>
        )}
        {categories.length ? (
          <TagLabelContainer
            tagLabels={categories.map((category) => ({
              ...category,
              size: 's',
            }))}
          />
        ) : (
          ''
        )}
      </div>

      <h2 id={`news-header-${index}`} className="news-list__item__headline">
        <Link href={link}>{title}</Link>
      </h2>
    </div>

    <div className="news-list__item__content-wrap">
      {image && (
        <div className="news-list__item__image">
          <Picture src={image} alt={body} />
        </div>
      )}

      <div className="news-list__item__teaser">
        {body && <RichText text={body} />}
        <div className="news-list__item__more">
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
    </div>
  </article>
);

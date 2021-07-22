import { createContext, FunctionComponent, useContext } from 'react';
import { format } from 'date-fns';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import { TagLabelContainer } from '@kickstartds/base/lib/tag-label-container';
import { Link } from '@kickstartds/base/lib/link';
import { LinkButton } from '@kickstartds/base/lib/link-button';
import { Picture } from '@kickstartds/base/lib/picture';
import { NewsListProps } from './NewsListProps';
import './news-list.scss';

interface NewsListRenderFunctions {
  renderTopic?: renderFn;
  renderText?: renderFn;
}

// TODO readd: {{> molecules-tag-label-container @root}}
const NewsListComponent: FunctionComponent<
  NewsListProps & NewsListRenderFunctions
> = ({
  image,
  date,
  link,
  title,
  body,
  categories = [],
  index,
  renderTopic = defaultRenderFn,
  renderText = richTextDefaultRenderFn,
}) => (
  <article className="c-news-list">
    <div className="c-news-list__header">
      <div className="c-news-list__meta">
        {date && (
          <time
            dateTime={format(new Date(date), 'yyy-MM-dd')}
            className="c-news-list__date"
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

      <h2 id={`news-header-${index}`} className="c-news-list__headline">
        <Link href={link.href}>{renderTopic(title)}</Link>
      </h2>
    </div>

    <div className="c-news-list__content-wrap">
      {image && (
        <div className="c-news-list__image">
          <Picture {...image} />
        </div>
      )}

      <div className="c-news-list__teaser">
        {body && <RichText text={body} renderText={renderText} />}
        <div className="c-news-list__more">
          <LinkButton
            id={`news-link-more-${index}`}
            aria-labelledby={`news-link-more-${index} news-header-${index}`}
            icon={{ icon: 'chevron-right' }}
            iconAfter={true}
            variant="clear"
            size="medium"
            {...link}
          />
        </div>
      </div>
    </div>
  </article>
);

export const NewsListContextDefault = NewsListComponent;
export const NewsListContext = createContext(NewsListContextDefault);
export const NewsList: typeof NewsListContextDefault = (props) => {
  const Component = useContext(NewsListContext);
  return <Component {...props} />;
};

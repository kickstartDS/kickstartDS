import { createContext, useContext, FunctionComponent } from 'react';
import { format } from 'date-fns';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { TagLabelContainer } from '@kickstartds/base/lib/tag-label-container';
import { Link } from '@kickstartds/base/lib/link';
import { LinkButton } from '@kickstartds/base/lib/link-button';
import { Picture } from '@kickstartds/base/lib/picture';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import { NewsLatestProps } from './NewsLatestProps';
import './news-latest.scss';

interface NewsLatestRenderFunctions {
  renderTopic?: renderFn;
  renderText?: renderFn;
}

const NewsLatestComponent: FunctionComponent<
  NewsLatestProps & NewsLatestRenderFunctions
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
  <article className="c-news-latest">
    {image && (
      <div className="c-news-latest__image">
        <Picture {...image} />
      </div>
    )}

    <div className="c-news-latest__meta">
      {date && (
        <time
          dateTime={format(new Date(date), 'yyy-MM-dd')}
          className="c-news-latest__date"
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

    <div className="c-news-latest__body">
      <h2 className="c-news-latest__headline" id={`news-header-${index}`}>
        <Link href={link.href}>{renderTopic(title)}</Link>
      </h2>
      {body && (
        <RichText
          text={body}
          className="c-news-latest__teaser"
          renderText={renderText}
        />
      )}
      <div className="c-news-latest__more">
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
  </article>
);

export const NewsLatestContextDefault = NewsLatestComponent;
export const NewsLatestContext = createContext(NewsLatestContextDefault);
export const NewsLatest: typeof NewsLatestContextDefault = (props) => {
  const Component = useContext(NewsLatestContext);
  return <Component {...props} />;
};

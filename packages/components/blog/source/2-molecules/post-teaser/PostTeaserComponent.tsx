import {
  createContext,
  useContext,
  FunctionComponent,
  HTMLAttributes,
  createElement,
} from 'react';
import { format } from 'date-fns';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { TagLabelContainer } from '@kickstartds/base/lib/tag-label-container';
import { Link } from '@kickstartds/base/lib/link';
import { LinkButton } from '@kickstartds/base/lib/link-button';
import { Picture } from '@kickstartds/base/lib/picture';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import { PostTeaserProps } from './PostTeaserProps';
import './post-teaser.scss';

interface PostTeaserRenderFunctions {
  renderTopic?: renderFn;
  renderText?: renderFn;
}

const PostTeaserHeader = ({
  date,
  categories,
  index,
  link,
  renderTopic,
  title,
}) => (
  <div className="c-post-teaser--header">
    <div className="c-post-teaser__meta">
      {date && (
        <time
          dateTime={format(new Date(date), 'yyy-MM-dd')}
          className="c-post-teaser__date"
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

    <h2 className="c-post-teaser__headline" id={`news-header-${index}`}>
      <Link href={link.href}>{renderTopic(title)}</Link>
    </h2>
  </div>
);

const PostTeaserComponent: FunctionComponent<
  PostTeaserProps & PostTeaserRenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({
  variant = 'image-first',
  image,
  date,
  link,
  title,
  body,
  categories = [],
  index,
  renderTopic = defaultRenderFn,
  renderText = richTextDefaultRenderFn,
  className,
  ...props
}) => (
  <article
    className={classnames(
      'c-post-teaser',
      {
        'c-post-teaser--image-first': variant === 'image-first',
        'c-post-teaser--title-first': variant === 'title-first',
      },
      className
    )}
    {...props}
  >
    {variant === 'title-first' && (
      <PostTeaserHeader
        date={date}
        categories={categories}
        index={index}
        link={link}
        renderTopic={renderTopic}
        title={title}
      />
    )}
    {image && (
      <div className="c-post-teaser__image">
        <Picture {...image} />
      </div>
    )}
    <div className="c-post-teaser__body">
      {variant === 'image-first' && (
        <PostTeaserHeader
          date={date}
          categories={categories}
          index={index}
          link={link}
          renderTopic={renderTopic}
          title={title}
        />
      )}
      {body && <RichText text={body} renderText={renderText} />}
      <div className="c-post-teaser__more">
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

export const PostTeaserContextDefault = PostTeaserComponent;
export const PostTeaserContext = createContext(PostTeaserContextDefault);
export const PostTeaser: typeof PostTeaserContextDefault = (props) =>
  createElement(useContext(PostTeaserContext), props);

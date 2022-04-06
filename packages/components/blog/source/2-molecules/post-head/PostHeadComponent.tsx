import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { format } from 'date-fns';
import { Headline } from '@kickstartds/base/lib/headline';
import { Picture } from '@kickstartds/base/lib/picture';
import { TagLabelContainer } from '@kickstartds/base/lib/tag-label-container';
import { PostHeadProps } from './PostHeadProps';

export { PostHeadProps };
export const PostHeadComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  PostHeadProps & HTMLAttributes<HTMLDivElement>
> = (
  { date, categories, headline, image, imageAlignment, className, ...props },
  ref
) => (
  <div className={classNames('c-post-head', className)} ref={ref} {...props}>
    <div className="c-post-head__meta">
      {date && (
        <time
          dateTime={format(new Date(date), 'yyy-MM-dd')}
          className="c-post-head__date"
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

    <Headline {...headline} />

    {image && (
      <div
        className={`c-post-head__image c-post-head__image--${imageAlignment}`}
      >
        <Picture {...image} />
      </div>
    )}
  </div>
);

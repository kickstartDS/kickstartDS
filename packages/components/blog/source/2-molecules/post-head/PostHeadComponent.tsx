import { createContext, useContext, FunctionComponent } from 'react';
import { format } from 'date-fns';
import { Headline } from '@kickstartds/base/lib/headline';
import { Picture } from '@kickstartds/base/lib/picture';
import { TagLabelContainer } from '@kickstartds/base/lib/tag-label-container';
import { PostHeadProps } from './PostHeadProps';
import './post-head.scss';

const PostHeadComponent: FunctionComponent<PostHeadProps> = ({
  date,
  categories,
  headline,
  image,
  imageAlignment,
}) => (
  <div className="c-post-head">
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

export const PostHeadContextDefault = PostHeadComponent;
export const PostHeadContext = createContext(PostHeadContextDefault);
export const PostHead: typeof PostHeadContextDefault = (props) => {
  const Component = useContext(PostHeadContext);
  return <Component {...props} />;
};

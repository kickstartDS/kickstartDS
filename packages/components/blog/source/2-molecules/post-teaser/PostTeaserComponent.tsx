import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { TagLabelContainer } from '@kickstartds/base/lib/tag-label-container';
import { Teaser, TeaserRenderFunctions } from '@kickstartds/base/lib/teaser';
import { Picture } from '@kickstartds/base/lib/picture';
import { defaultRenderFn as richTextDefaultRenderFn } from '@kickstartds/base/lib/rich-text';
import { PostMeta } from '../post-meta';
import { PostTeaserProps } from './PostTeaserProps';
import './post-teaser.scss';

const PostTeaserComponent: ForwardRefRenderFunction<
  HTMLElement,
  PostTeaserProps & TeaserRenderFunctions & HTMLAttributes<HTMLElement>
> = (
  {
    image,
    link,
    title,
    body,
    categories = [],
    renderTopic = defaultRenderFn,
    renderText = richTextDefaultRenderFn,
    meta,
    className,
    ...props
  },
  ref
) => (
  <article
    className={classnames('c-post-teaser', className)}
    ref={ref}
    {...props}
  >
    {categories && categories.length && (
      <TagLabelContainer
        tagLabels={categories.map((category) => ({
          ...category,
          size: 's',
        }))}
      />
    )}
    <Teaser
      topic={title}
      text={body}
      link={{ ...link, hidden: true }}
      renderTopic={renderTopic}
      renderText={(text) => (
        <>
          {renderText(text)}
          {meta && <PostMeta {...meta} />}
        </>
      )}
    >
      {image && (
        <div className="c-post-teaser__image">
          <Picture {...image} />
        </div>
      )}
    </Teaser>
  </article>
);

export const PostTeaserContextDefault = forwardRef(PostTeaserComponent);
export const PostTeaserContext = createContext(PostTeaserContextDefault);
export const PostTeaser: typeof PostTeaserContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(PostTeaserContext), { ...props, ref })
);

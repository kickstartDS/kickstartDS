import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { TagLabelContainer } from '@kickstartds/base/lib/tag-label-container';
import { Teaser, TeaserProps } from '@kickstartds/base/lib/teaser';
import { Picture } from '@kickstartds/base/lib/picture';
import { defaultRenderFn as richTextDefaultRenderFn } from '@kickstartds/base/lib/rich-text';
import { PostMeta } from '../post-meta';
import type { PostTeaserProps as PostTeaserSchemaProps } from './PostTeaserProps';

export type PostTeaserProps = PostTeaserSchemaProps & TeaserProps;
export const PostTeaserComponent: ForwardRefRenderFunction<
  HTMLElement,
  PostTeaserProps & HTMLAttributes<HTMLElement>
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
    component,
    ...props
  },
  ref
) => (
  <article
    className={classnames('c-post-teaser', className)}
    ks-component={component}
    ref={ref}
    {...props}
  >
    {categories && categories.length ? (
      <TagLabelContainer
        tagLabels={categories.map((category) => ({
          ...category,
          size: 's',
        }))}
      />
    ) : null}
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

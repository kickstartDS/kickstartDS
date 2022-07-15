import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import { Picture } from '@kickstartds/base/picture';
import { Icon } from '@kickstartds/base/icon';
import classNames from 'classnames';
import { type PostMetaProps } from './PostMetaProps';

export { PostMetaProps };
export const PostMetaComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  PostMetaProps & HTMLAttributes<HTMLElement>
> = ({ author, items, className }, ref) => (
  <div className={classNames('c-post-meta', className)} ref={ref}>
    {author && (author.image || author.name) && (
      <div className="c-post-meta__item c-post-meta__item--author">
        {author.image && (
          <Picture {...author.image} className="c-post-meta__avatar" />
        )}
        {author.name}
      </div>
    )}
    {items &&
      items.length &&
      items.map(({ icon, text }, i) => (
        <span className="c-post-meta__item" key={i}>
          {icon && <Icon icon={icon} />}
          {text}
        </span>
      ))}
  </div>
);

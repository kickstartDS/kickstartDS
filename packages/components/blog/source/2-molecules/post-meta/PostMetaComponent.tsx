import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import { Picture } from '@kickstartds/base/lib/picture';
import { Icon } from '@kickstartds/base/lib/icon';
import classNames from 'classnames';
import { PostMetaProps } from './PostMetaProps';
import './post-meta.scss';

const PostMetaComponent: ForwardRefRenderFunction<
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

export const PostMetaContextDefault = forwardRef(PostMetaComponent);
export const PostMetaContext = createContext(PostMetaContextDefault);
export const PostMeta: typeof PostMetaContextDefault = forwardRef(
  (props, ref) => createElement(useContext(PostMetaContext), { ...props, ref })
);

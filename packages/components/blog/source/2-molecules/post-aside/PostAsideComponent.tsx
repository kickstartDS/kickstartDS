import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
  FunctionComponent,
} from 'react';
import { Headline } from '@kickstartds/base/lib/headline';
import { Divider } from '@kickstartds/base/lib/divider';
import { Contact } from '@kickstartds/content/lib/contact';
import classNames from 'classnames';
import { PostShareBar } from '../post-share-bar';
import { PostMeta } from '../post-meta';
import { PostAsideProps, Author as AuthorPros } from './PostAsideProps';
import './post-aside.scss';

const Author: FunctionComponent<AuthorPros> = ({ headline, ...props }) => (
  <div className="c-post-aside__author">
    <Headline content={headline} />
    <Contact {...props} />
  </div>
);

const PostAsideComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  PostAsideProps & HTMLAttributes<HTMLElement>
> = ({ author, meta, shareBar, className }, ref) => (
  <div className={classNames('c-post-aside', className)} ref={ref}>
    {author && <Author {...author} />}

    {meta && (
      <>
        <Divider />
        <PostMeta {...meta} />
      </>
    )}

    {shareBar && (
      <>
        <Divider />
        <PostShareBar {...shareBar} />
      </>
    )}
  </div>
);

export const PostAsideContextDefault = forwardRef(PostAsideComponent);
export const PostAsideContext = createContext(PostAsideContextDefault);
export const PostAside: typeof PostAsideContextDefault = forwardRef(
  (props, ref) => createElement(useContext(PostAsideContext), { ...props, ref })
);

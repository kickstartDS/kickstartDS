import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  FunctionComponent,
} from 'react';
import { Headline } from '@kickstartds/base/headline';
import { Divider } from '@kickstartds/base/divider';
import { Contact } from '@kickstartds/base/contact';
import classNames from 'classnames';
import { PostShareBar } from '../post-share-bar';
import { PostMeta } from '../post-meta';
import { type PostAsideProps, Author as AuthorPros } from './PostAsideProps';
import './post-aside.scss';

const Author: FunctionComponent<AuthorPros> = ({ headline, ...props }) => (
  <div className="c-post-aside__author">
    <Headline content={headline} />
    <Contact {...props} />
  </div>
);

export { PostAsideProps };

export const PostAsideComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  PostAsideProps & HTMLAttributes<HTMLElement>
> = ({ author, meta, shareBar, className, ...props }, ref) => (
  <div className={classNames('c-post-aside', className)} ref={ref} {...props}>
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

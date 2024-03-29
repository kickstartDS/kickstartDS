import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  FunctionComponent,
} from 'react';
import { Headline } from '@kickstartds/base/lib/headline';
import { Divider } from '@kickstartds/base/lib/divider';
import { Contact } from '@kickstartds/base/lib/contact';
import classNames from 'classnames';
import { PostShareBar } from '../post-share-bar';
import { PostMeta } from '../post-meta';
import type { PostAsideProps, AuthorProps } from './typing';
import './post-aside.scss';

const Author: FunctionComponent<AuthorProps> = ({ headline, ...props }) => (
  <div className="c-post-aside__author">
    <Headline spaceAfter="small" content={headline} />
    <Contact {...props} />
  </div>
);

export { PostAsideProps };

export const PostAsideComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  PostAsideProps & HTMLAttributes<HTMLElement>
> = ({ author, meta, shareBar, className, component, ...props }, ref) => (
  <div
    className={classNames('c-post-aside', className)}
    ks-component={component}
    ref={ref}
    {...props}
  >
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

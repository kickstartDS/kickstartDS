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
import { Link } from '@kickstartds/base/lib/link';
import { Icon } from '@kickstartds/base/lib/icon';
import { Contact } from '@kickstartds/content/lib/contact';
import classNames from 'classnames';
import {
  PostAsideProps,
  Author as AuthorPros,
  Meta as MetaProps,
  MetaItem as MetaItemProps,
  ShareBar as ShareBarProps,
  ShareLink as ShareLinkProps,
} from './PostAsideProps';
import './post-aside.scss';

const Author: FunctionComponent<AuthorPros> = ({ headline, ...props }) => (
  <div className="c-post-aside__author">
    <Headline content={headline} />
    <Contact {...props} />
  </div>
);

const Meta: FunctionComponent<MetaProps> = ({ items = [] }) => (
  <div className="c-post-aside__meta">
    {items.map(({ icon, text }: MetaItemProps) => (
      <span className="c-post-aside__meta-item">
        <Icon icon={icon} />
        {text}
      </span>
    ))}
  </div>
);

const ShareBarLink: FunctionComponent<ShareLinkProps> = ({
  icon,
  newTab,
  ...props
}) => (
  <Link
    className="c-post-aside__share-link"
    {...(newTab ? { target: '_blank', rel: 'noopener' } : {})}
    {...props}
  >
    <Icon icon={icon} />
  </Link>
);

const ShareBar: FunctionComponent<ShareBarProps> = ({
  links = [],
  headline,
  headlineLevel,
  className,
  ...props
}) => (
  <div className={classNames('c-post-aside__share-bar', className)} {...props}>
    <Headline content={headline} level={headlineLevel} />
    {links.length ? links.map((link) => <ShareBarLink {...link} />) : ''}
  </div>
);

const PostAsideComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  PostAsideProps & HTMLAttributes<HTMLElement>
> = ({ author, meta = [], shareBar, className }, ref) => (
  <div className={classNames('c-post-aside', className)} ref={ref}>
    {author && <Author {...author} />}

    {meta && (
      <>
        <Divider />
        <Meta {...meta} />
      </>
    )}

    {shareBar && (
      <>
        <Divider />
        <ShareBar {...shareBar} />
      </>
    )}
  </div>
);

export const PostAsideContextDefault = forwardRef(PostAsideComponent);
export const PostAsideContext = createContext(PostAsideContextDefault);
export const PostAside: typeof PostAsideContextDefault = forwardRef(
  (props, ref) => createElement(useContext(PostAsideContext), { ...props, ref })
);

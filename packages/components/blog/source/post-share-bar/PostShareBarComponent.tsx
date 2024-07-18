import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Headline } from '@kickstartds/base/lib/headline';
import { Link } from '@kickstartds/base/lib/link';
import { Icon } from '@kickstartds/base/lib/icon';
import type { PostShareBarProps } from './PostShareBarProps';

export { PostShareBarProps };
export const PostShareBarComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  PostShareBarProps & HTMLAttributes<HTMLDivElement>
> = ({ headline, links, className, component, ...props }, ref) => (
  <div
    className={classNames('c-post-share-bar', className)}
    ks-component={component}
    ref={ref}
    {...props}
  >
    {headline?.content && (
      <Headline spaceAfter="small" {...headline} level="h3" />
    )}
    {links && links.length
      ? links.map(({ icon, newTab, ...linkProps }, i) => (
          <Link
            className="c-post-share-bar__link"
            {...(newTab ? { target: '_blank', rel: 'noopener' } : {})}
            {...linkProps}
            key={i}
          >
            <Icon icon={icon} />
          </Link>
        ))
      : null}
  </div>
);

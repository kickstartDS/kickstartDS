import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Headline } from '@kickstartds/base/headline';
import { Link } from '@kickstartds/base/link';
import { Icon } from '@kickstartds/base/icon';
import { type PostShareBarProps } from './PostShareBarProps';

export { PostShareBarProps };
export const PostShareBarComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  PostShareBarProps & HTMLAttributes<HTMLDivElement>
> = ({ headline = {}, links, className, ...props }, ref) => {
  const { align = 'left', ...headlineProps } = headline;
  return (
    <div
      className={classNames('c-post-share-bar', className)}
      {...props}
      ref={ref}
    >
      {headline.content && <Headline {...headlineProps} align={align} />}
      {links &&
        links.length &&
        links.map(({ icon, newTab, ...linkProps }, i) => (
          <Link
            className="c-post-share-bar__link"
            {...(newTab ? { target: '_blank', rel: 'noopener' } : {})}
            {...linkProps}
            key={i}
          >
            <Icon icon={icon} />
          </Link>
        ))}
    </div>
  );
};

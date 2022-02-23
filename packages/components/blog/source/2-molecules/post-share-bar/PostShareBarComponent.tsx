import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classNames from 'classnames';
import { Headline } from '@kickstartds/base/lib/headline';
import { Link } from '@kickstartds/base/lib/link';
import { Icon } from '@kickstartds/base/lib/icon';
import { PostShareBarProps } from './PostShareBarProps';
import './post-share-bar.scss';

const PostShareBarComponent: ForwardRefRenderFunction<
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

export const PostShareBarContextDefault = forwardRef(PostShareBarComponent);
export const PostShareBarContext = createContext(PostShareBarContextDefault);
export const PostShareBar: typeof PostShareBarContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(PostShareBarContext), { ...props, ref })
);

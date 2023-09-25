import { ForwardRefRenderFunction, ImgHTMLAttributes, forwardRef } from 'react';
import classnames from 'classnames';
import type { PictureProps } from './typing';

export { PictureProps };

const Image = forwardRef<
  HTMLImageElement,
  PictureProps & ImgHTMLAttributes<HTMLImageElement>
>(
  (
    {
      className,
      src,
      srcSet,
      lazy = true,
      noscript = true,
      component,
      ...props
    },
    ref
  ) => (
    <>
      <img
        {...props}
        className={classnames(className, { lazyload: lazy })}
        src={!lazy ? src : undefined}
        data-src={lazy ? src : undefined}
        srcSet={!lazy ? srcSet : undefined}
        data-srcset={lazy ? srcSet : undefined}
        ks-component={component}
        ref={ref}
      />
      {lazy && noscript && (
        <noscript>
          <img {...props} src={src} srcSet={srcSet} className={className} />
        </noscript>
      )}
    </>
  )
);

export const PictureComponent: ForwardRefRenderFunction<
  HTMLImageElement,
  PictureProps & ImgHTMLAttributes<HTMLImageElement>
> = ({ sources = [], lazy = true, pictureClassName, ...props }, ref) => {
  const fallbackImage = <Image {...props} lazy={lazy} ref={ref} />;

  return sources.length ? (
    <picture className={pictureClassName}>
      {sources.map(({ media, srcSet, type }) => (
        <source
          key={`${media}-${type}-${srcSet}`}
          type={type}
          media={media}
          srcSet={!lazy ? srcSet : undefined}
          data-srcset={lazy ? srcSet : undefined}
        />
      ))}
      {fallbackImage}
    </picture>
  ) : (
    fallbackImage
  );
};

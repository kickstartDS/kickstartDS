import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Icon } from '../../icon';
import { Link } from '../../link';
import { Picture } from '../picture';
import { type LazyLightboxImageProps as LightboxLazyImageProps } from './LightboxLazyImageProps';

export { LightboxLazyImageProps };
export const LightboxLazyImageComponent: ForwardRefRenderFunction<
  HTMLElement,
  LightboxLazyImageProps & HTMLAttributes<HTMLElement>
> = (
  {
    image,
    thumb,
    zoomIcon,
    className,
    gallery,
    width,
    height,
    id,
    caption,
    hideCaption,
    captionClassName,
    ...props
  },
  ref
) => (
  <figure
    className={classnames(
      'lightbox-image',
      { 'lightbox-image--with-zoom-icon': zoomIcon },
      className
    )}
    itemScope={!!id}
    ref={ref}
    {...props}
  >
    <Link
      href={image}
      data-gallery={gallery}
      data-size-w={width}
      data-size-h={height}
      className="lightbox-image__link js-open-lightbox"
      title="Bild vergrößern"
    >
      <Picture
        src={thumb}
        className={classnames('lightbox-image__thumb', className)}
        itemProp="image"
      />
      {zoomIcon ? (
        <div className="lightbox-image__zoom-icon">
          <Icon icon="zoom" role="img" />
        </div>
      ) : (
        ''
      )}
    </Link>
    {caption ? (
      <figcaption className={captionClassName} hidden={hideCaption}>
        {caption}
      </figcaption>
    ) : (
      ''
    )}
  </figure>
);

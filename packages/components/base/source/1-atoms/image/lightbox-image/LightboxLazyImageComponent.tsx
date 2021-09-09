import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Icon } from '../../icon';
import { Link } from '../../link';
import { Picture } from '../picture/PictureComponent';
import { LazyLightboxImageProps } from './LightboxLazyImageProps';
import './lightbox-image.scss';

export const LightboxLazyImage: FunctionComponent<LazyLightboxImageProps> = ({
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
}) => (
  <figure
    className={classnames(
      'lightbox-image',
      { 'lightbox-image--with-zoom-icon': zoomIcon },
      className
    )}
    itemScope={!!id}
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

import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Icon } from '../../icon/IconComponent';
import { Link } from '../../link/LinkComponent';
import { Picture } from '../PictureComponent';
import { LazyLightboxImageProps } from './LightboxLazyImageProps';
import './lightbox-image.css';

export const LightboxLazyImage: FunctionComponent<LazyLightboxImageProps> = ({
  image,
  thumb,
  zoomIcon,
  class: imgClass,
  gallery,
  width,
  height,
  id,
  caption,
  hideCaption,
}) => (
  <>
    <figure
      className={classnames(
        'lightbox-image',
        { 'lightbox-image--with-zoom-icon': zoomIcon },
        imgClass
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
          className={classnames('lightbox-image__thumb', imgClass)}
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
      {caption ? <figcaption hidden={hideCaption}>{caption}</figcaption> : ''}
    </figure>
  </>
);

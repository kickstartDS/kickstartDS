import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { ContentHeadline } from '@kickstartds/base/lib/content-headline';
import { LinkButton } from '@kickstartds/base/lib/link-button';
import { RichText } from '@kickstartds/base/lib/rich-text';
import { Picture } from '@kickstartds/base/lib/picture';
import { StorytellingProps } from './StorytellingProps';
import './storytelling.scss';

interface ILazy {
  lazy: boolean;
}

const StorytellingMixin: FunctionComponent<StorytellingProps & ILazy> = ({
  lazy,
  image,
  box,
  full,
  backgroundColor,
  backgroundImage,
}) => (
  <div
    className={classnames('storytelling', {
      'storytelling--order-mobile-image-last':
        image.order && image.order.mobileImageLast,
      'storytelling--order-desktop-image-last':
        image.order && image.order.desktopImageLast,
      'storytelling--full': full,
      'storytelling--four-to-three': image.ratio === '4:3',
      'storytelling--three-to-two': image.ratio === '3:2',
      'storytelling--sixteen-to-nine': image.ratio === '16:9',
      'storytelling--square': image.ratio === '1:1',
      lazyload: lazy && backgroundImage,
    })}
    style={{
      backgroundColor,
      backgroundImage: lazy ? undefined : `url(${backgroundImage})`,
    }}
    data-bg={(lazy && backgroundImage) || null}
  >
    <div
      className={classnames(
        'storytelling__image',
        image.vAlign &&
          image.vAlign !== 'center' &&
          `storytelling__image--${image.vAlign}`,
        image.hAlign &&
          image.hAlign !== 'center' &&
          `storytelling__image--${image.hAlign}`
      )}
    >
      {image.source && (
        <Picture
          src={image.source}
          alt=""
          objectFit={image.ratio ? 'cover' : undefined}
          lazy={lazy}
        />
      )}
    </div>

    <div
      className={classnames(
        'storytelling__box',
        box.vAlign !== 'center' && `storytelling__box--${box.vAlign}`,
        box.hAlign !== 'center' && `storytelling__box--${box.hAlign}`
      )}
    >
      <div
        className={classnames(
          'storytelling__box__content',
          box.textAlign !== 'left' &&
            `storytelling__box__content--${box.textAlign}`
        )}
        style={{ color: box.textColor }}
      >
        {box.headline && <ContentHeadline {...box.headline} />}
        {box.text && (
          <RichText text={box.text} className="storytelling__text" />
        )}
        {box.link && <LinkButton {...box.link} />}
      </div>
    </div>
  </div>
);

export const Storytelling: FunctionComponent<StorytellingProps> = (props) => (
  <div className="storytelling__wrapper">
    <StorytellingMixin {...props} lazy={true} />
    {props.backgroundImage && (
      <noscript>
        <StorytellingMixin {...props} lazy={false} />
      </noscript>
    )}
  </div>
);

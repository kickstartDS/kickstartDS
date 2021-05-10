import { createContext, FunctionComponent, useContext } from 'react';
import classnames from 'classnames';
import { renderFn } from '@kickstartds/core/lib/core';
import { Headline } from '@kickstartds/base/lib/headline';
import { LinkButton } from '@kickstartds/base/lib/link-button';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import { Picture } from '@kickstartds/base/lib/picture';
import { StorytellingProps } from './StorytellingProps';
import './storytelling.scss';

interface ILazy {
  lazy: boolean;
}

interface RenderFunctions {
  renderText?: renderFn;
}

const StorytellingMixin: FunctionComponent<
  StorytellingProps & ILazy & RenderFunctions
> = ({
  lazy,
  image,
  box,
  full,
  backgroundColor,
  backgroundImage,
  renderText = richTextDefaultRenderFn,
}) => (
  <div
    className={classnames('c-storytelling', {
      'c-storytelling--order-mobile-image-last':
        image.order && image.order.mobileImageLast,
      'c-storytelling--order-desktop-image-last':
        image.order && image.order.desktopImageLast,
      'c-storytelling--full': full,
      'c-storytelling--four-to-three': image.ratio === '4:3',
      'c-storytelling--three-to-two': image.ratio === '3:2',
      'c-storytelling--sixteen-to-nine': image.ratio === '16:9',
      'c-storytelling--square': image.ratio === '1:1',
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
        'c-storytelling__image',
        image.vAlign &&
          image.vAlign !== 'center' &&
          `c-storytelling__image--${image.vAlign}`,
        image.hAlign &&
          image.hAlign !== 'center' &&
          `c-storytelling__image--${image.hAlign}`
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
        'c-storytelling__box',
        box.vAlign !== 'center' && `c-storytelling__box--${box.vAlign}`,
        box.hAlign !== 'center' && `c-storytelling__box--${box.hAlign}`
      )}
    >
      <div
        className={classnames(
          'c-storytelling__box__content',
          box.textAlign !== 'left' &&
            `c-storytelling__box__content--${box.textAlign}`
        )}
        style={{ color: box.textColor }}
      >
        {box.headline && <Headline {...box.headline} />}
        {box.text && (
          <RichText
            text={box.text}
            renderText={renderText}
            className="c-storytelling__text"
          />
        )}
        {box.link && <LinkButton {...box.link} />}
      </div>
    </div>
  </div>
);

const StorytellingComponent: FunctionComponent<StorytellingProps> = (props) => (
  <div className="c-storytelling__wrapper">
    <StorytellingMixin {...props} lazy={true} />
    {props.backgroundImage && (
      <noscript>
        <StorytellingMixin {...props} lazy={false} />
      </noscript>
    )}
  </div>
);

export const StorytellingContextDefault = StorytellingComponent;
export const StorytellingContext = createContext(StorytellingContextDefault);
export const Storytelling: typeof StorytellingContextDefault = (props) => {
  const Component = useContext(StorytellingContext);
  return <Component {...props} />;
};

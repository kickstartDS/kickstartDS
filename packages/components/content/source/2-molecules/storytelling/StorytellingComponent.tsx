import {
  FunctionComponent,
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
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
  StorytellingProps & ILazy & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({
  lazy,
  image,
  box,
  full,
  backgroundColor,
  backgroundImage,
  renderText = richTextDefaultRenderFn,
  className,
  ...props
}) => (
  <div
    className={classnames(
      'c-storytelling',
      {
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
      },
      className
    )}
    style={{
      backgroundColor,
      backgroundImage: lazy ? undefined : `url(${backgroundImage})`,
    }}
    data-bg={(lazy && backgroundImage) || null}
    {...props}
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
      {image.source && <Picture src={image.source} alt="" lazy={lazy} />}
    </div>

    <div
      className={classnames(
        'c-storytelling__box',
        box.vAlign &&
          box.vAlign !== 'center' &&
          `c-storytelling__box--${box.vAlign}`,
        box.hAlign &&
          box.hAlign !== 'center' &&
          `c-storytelling__box--${box.hAlign}`
      )}
    >
      <div
        className={classnames(
          'c-storytelling__box__content',
          box.textAlign &&
            box.textAlign !== 'left' &&
            `c-storytelling__box__content--${box.textAlign}`
        )}
        style={{ color: box.textColor }}
      >
        {box.headline && (
          <Headline
            level="p"
            styleAs="h2"
            {...box.headline}
            align={box.headline.align || box.textAlign || 'left'}
          />
        )}
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

const StorytellingComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  StorytellingProps & HTMLAttributes<HTMLDivElement>
> = (props, ref) => (
  <div className="c-storytelling__wrapper">
    <StorytellingMixin {...props} ref={ref} lazy={true} />
    {props.backgroundImage && (
      <noscript>
        <StorytellingMixin {...props} lazy={false} />
      </noscript>
    )}
  </div>
);

export const StorytellingContextDefault = forwardRef(StorytellingComponent);
export const StorytellingContext = createContext(StorytellingContextDefault);
export const Storytelling: typeof StorytellingContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(StorytellingContext), { ...props, ref })
);

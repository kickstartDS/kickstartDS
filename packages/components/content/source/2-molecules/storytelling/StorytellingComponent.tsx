import {
  FunctionComponent,
  ForwardRefRenderFunction,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { Headline } from '@kickstartds/base/headline';
import { Button } from '@kickstartds/base/button';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/rich-text';
import { Picture } from '@kickstartds/base/picture';
import { type StorytellingProps } from './StorytellingProps';

interface ILazy {
  lazy: boolean;
}

interface RenderFunctions {
  renderText?: typeof richTextDefaultRenderFn;
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
  inverted,
  className,
  ...props
}) => (
  <div
    className={classnames(
      'c-storytelling',
      image && {
        'c-storytelling--order-mobile-image-last':
          image.order && image.order.mobileImageLast,
        'c-storytelling--order-desktop-image-last':
          image.order && image.order.desktopImageLast,
        'c-storytelling--four-to-three': image.ratio === '4:3',
        'c-storytelling--three-to-two': image.ratio === '3:2',
        'c-storytelling--sixteen-to-nine': image.ratio === '16:9',
        'c-storytelling--square': image.ratio === '1:1',
      },
      {
        'c-storytelling--full': full,
        lazyload: lazy && backgroundImage,
      },
      className
    )}
    style={{
      backgroundColor,
      backgroundImage: lazy ? undefined : `url(${backgroundImage})`,
    }}
    data-bg={(lazy && backgroundImage) || null}
    ks-inverted={inverted?.toString()}
    {...props}
  >
    {image?.source && (
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
        <Picture src={image.source} alt="" lazy={lazy} />
      </div>
    )}

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
        {box.link && <Button {...box.link} />}
      </div>
    </div>
  </div>
);

export { StorytellingProps };
export const StorytellingComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  StorytellingProps & HTMLAttributes<HTMLDivElement>
> = (props, ref) => (
  <>
    <StorytellingMixin {...props} ref={ref} lazy={true} />
    {props.backgroundImage && (
      <noscript>
        <StorytellingMixin {...props} lazy={false} />
      </noscript>
    )}
  </>
);

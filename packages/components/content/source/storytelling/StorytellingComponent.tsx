import {
  ForwardRefRenderFunction,
  ForwardRefExoticComponent,
  ForwardedRef,
  HTMLAttributes,
  MutableRefObject,
  RefCallback,
  forwardRef,
  useRef,
  useEffect,
} from 'react';
import classnames from 'classnames';
import { Headline } from '@kickstartds/base/lib/headline';
import { Button } from '@kickstartds/base/lib/button';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import { Picture } from '@kickstartds/base/lib/picture';
import type { StorytellingProps } from './StorytellingProps';

function mergeRefs<T>(
  ...refs: Array<MutableRefObject<T> | RefCallback<T>>
): RefCallback<T> {
  return (value) =>
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
}

interface ILazy {
  lazy: boolean;
}

interface RenderFunctions {
  renderText?: typeof richTextDefaultRenderFn;
}

const StorytellingMixin: ForwardRefExoticComponent<
  StorytellingProps & ILazy & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = forwardRef(
  (
    {
      lazy,
      image,
      box = {},
      full = false,
      backgroundColor,
      backgroundImage,
      renderText = richTextDefaultRenderFn,
      inverted,
      className,
      component,
      ...props
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const localRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      // remove lazy loaded background image
      if (!backgroundImage) {
        localRef.current.style.backgroundImage = null;
      }
    }, [backgroundImage]);

    return (
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
        ks-component={component}
        ref={mergeRefs(ref, localRef)}
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
                spaceAfter="small"
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
  }
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

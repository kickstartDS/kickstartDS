import {
  FC,
  ForwardRefRenderFunction,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';
import classnames from 'classnames';
import { Headline } from '../headline';
import { Icon } from '../icon';
import { ButtonGroup } from '../button-group';
import type { SectionProps as SectionSchemaProps } from './typing';

export type SectionProps = SectionSchemaProps & {
  renderSliderBackIcon?: (icon: string) => ReactNode;
  renderSliderForwardIcon?: (icon: string) => ReactNode;
};
export const defaultIconRenderFn = (icon: string) => <Icon icon={icon} />;

const SectionContainer: FC<
  PropsWithChildren<{
    type: 'headline' | 'content' | 'buttons';
    width: SectionSchemaProps['content']['width'];
    align: SectionSchemaProps['content']['align'];
    mode?: SectionSchemaProps['content']['mode'];
    className?: string;
  }>
> = ({ type, width, align, mode, className, children }) => (
  <div
    className={classnames(
      'l-section__container',
      `l-section__container--${type}`
    )}
  >
    <div
      className={classnames(
        'l-section__content',
        mode && mode !== 'default' && `l-section__content--${mode}`,
        width !== 'unset' && `l-section__content--${width}`,
        align && align !== 'center' && `l-section__content--${align}`,
        className
      )}
    >
      {children}
    </div>
  </div>
);

export const SectionComponent: ForwardRefRenderFunction<
  HTMLElement,
  SectionProps & Omit<HTMLAttributes<HTMLElement>, 'content'>
> = (
  {
    background = 'default',
    inverted,
    spaceBefore = 'default',
    spaceAfter = 'default',
    width = 'default',
    content = {} as SectionSchemaProps['content'],
    headline = {} as SectionSchemaProps['headline'],
    buttons = {} as SectionSchemaProps['buttons'],
    sliderNavPosition,
    sliderBackIcon = 'arrow-left',
    renderSliderBackIcon = defaultIconRenderFn,
    sliderBackLabel = 'Back',
    sliderForwardIcon = 'arrow-right',
    renderSliderForwardIcon = defaultIconRenderFn,
    sliderForwardLabel = 'Forward',
    className,
    component = 'base.section',
    children,
    ...props
  },
  ref
) => {
  const {
    width: contentWidth = 'unset',
    align: contentAlign = 'center',
    gutter = 'default',
    mode = 'default',
    tileWidth = 'default',
  } = content;
  const contentClassName = classnames(
    content.className,
    tileWidth !== 'default' && `l-section__content--tiles-${tileWidth}`
  );
  const {
    width: headlineWidth = 'unset',
    align: headlineAlign = contentAlign,
    textAlign: headlineTextAlign,
    className: headlineClassName,
    ...headlineProps
  } = headline;
  const {
    arrangement: buttonsArrangement = contentAlign,
    className: buttonsClassName,
  } = buttons;

  return (
    <section
      className={classnames(
        'l-section',
        background && background !== 'default' && `l-section--${background}`,
        spaceBefore &&
          spaceBefore !== 'default' &&
          `l-section--space-before-${spaceBefore}`,
        spaceAfter &&
          spaceAfter !== 'default' &&
          `l-section--space-after-${spaceAfter}`,
        width && width !== 'default' && `l-section--${width}`,
        gutter && gutter !== 'default' && `l-section--gutter-${gutter}`,
        className
      )}
      ks-inverted={inverted?.toString()}
      ks-component={component}
      ref={ref}
      {...props}
    >
      {headlineProps && headlineProps.content && (
        <SectionContainer
          type="headline"
          width={headlineWidth}
          align={headlineAlign}
          className={headlineClassName}
        >
          <Headline
            {...headlineProps}
            align={headlineTextAlign || headlineAlign}
          />
        </SectionContainer>
      )}

      {children &&
        (mode === 'slider' ? (
          <>
            <div className="l-section__slider">
              <SectionContainer
                type="content"
                width={contentWidth}
                align={contentAlign}
                mode={mode}
                className={contentClassName}
              >
                {children}
              </SectionContainer>
            </div>
            <SectionContainer
              type="content"
              width={contentWidth}
              align={contentAlign}
              className={contentClassName}
            >
              <div
                className={classnames(
                  'l-section__slider-nav',
                  sliderNavPosition &&
                    `l-section__slider-nav--${sliderNavPosition}`
                )}
              >
                <button
                  aria-label={sliderBackLabel}
                  className="l-section__slider-arrow l-section__slider-arrow--back"
                >
                  {renderSliderBackIcon(sliderBackIcon)}
                </button>
                <button
                  aria-label={sliderForwardLabel}
                  className="l-section__slider-arrow l-section__slider-arrow--forward"
                >
                  {renderSliderForwardIcon(sliderForwardIcon)}
                </button>
              </div>
            </SectionContainer>
          </>
        ) : (
          <SectionContainer
            type="content"
            width={contentWidth}
            align={contentAlign}
            mode={mode}
            className={contentClassName}
          >
            {children}
          </SectionContainer>
        ))}

      {buttons.items && buttons.items.length > 0 && (
        <SectionContainer
          type="buttons"
          width={contentWidth}
          align={contentAlign}
          className={buttonsClassName}
        >
          <ButtonGroup {...buttons} arrangement={buttonsArrangement} />
        </SectionContainer>
      )}
    </section>
  );
};

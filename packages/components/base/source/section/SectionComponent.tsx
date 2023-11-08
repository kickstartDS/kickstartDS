import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Headline } from '../headline';
import type { SectionProps } from './typing';

const containerClassName = (
  {
    width,
    align,
    gutter,
    mode,
  }: {
    width?: SectionProps['width'];
    gutter?: SectionProps['content']['gutter'];
    mode?: SectionProps['content']['mode'];
    align?: SectionProps['content']['align'];
  },
  className: string,
  ...additionalClassNames: string[]
) =>
  classnames(
    className,
    ...additionalClassNames,
    width && `${className}--${width}`,
    align && align !== 'center' && `${className}--${align}`,
    gutter && gutter !== 'default' && `${className}--gutter-${gutter}`,
    mode && mode !== 'default' && `${className}--${mode}`
  );

export { SectionProps };

export const SectionComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  SectionProps & Omit<HTMLAttributes<HTMLDivElement>, 'content'>
> = (
  {
    background = 'default',
    inverted,
    spaceBefore = 'default',
    spaceAfter = 'default',
    width = 'default',
    content = {} as SectionProps['content'],
    headline = {} as SectionProps['headline'],
    className,
    component,
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
    className: contentClassName,
  } = content;
  const {
    width: headlineWidth = 'unset',
    align: headlineAlign = contentAlign,
    textAlign: headlineTextAlign,
    className: headlineClassName,
    ...headlineProps
  } = headline;
  return (
    <div
      className={classnames(
        'l-section',
        background && background !== 'default' && `l-section--${background}`,
        spaceBefore &&
          spaceBefore !== 'default' &&
          `l-section--space-before-${spaceBefore}`,
        spaceAfter &&
          spaceAfter !== 'default' &&
          `l-section--space-after-${spaceAfter}`,
        className
      )}
      ks-inverted={inverted?.toString()}
      ks-component={component}
      ref={ref}
      {...props}
    >
      <div
        className={containerClassName(
          { width: width !== 'default' ? width : undefined },
          'l-section__content'
        )}
      >
        {headlineProps && headlineProps.content && (
          <div
            className={containerClassName(
              {
                width: headlineWidth !== 'unset' ? headlineWidth : undefined,
                align: headlineAlign,
              },
              'l-section__container',
              'l-section__container--headline',
              headlineClassName
            )}
          >
            <Headline
              align={headlineTextAlign || headlineAlign}
              {...headlineProps}
            />
          </div>
        )}
        {children && (
          <div
            className={containerClassName(
              {
                width: contentWidth !== 'unset' ? contentWidth : undefined,
                align: contentAlign,
                gutter,
                mode,
              },
              'l-section__container',
              'l-section__container--content',
              contentClassName
            )}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

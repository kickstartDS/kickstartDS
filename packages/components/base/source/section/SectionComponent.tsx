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
  }: SectionProps & { align?: 'left' | 'center' | 'right' },
  className = 'l-section__container'
) =>
  classnames(
    className,
    width && `${className}--${width}`,
    align && align !== 'center' && `${className}--${align}`,
    gutter && gutter !== 'default' && `${className}--gutter-${gutter}`,
    mode && mode !== 'default' && `${className}--${mode}`
  );

export { SectionProps };

export const SectionComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  SectionProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    background = 'default',
    inverted,
    spaceBefore = 'default',
    spaceAfter = 'default',
    headline,
    width = 'default',
    contentWidth = 'unset',
    contentAlign = 'center',
    headlineWidth = 'unset',
    headlineAlign = contentAlign,
    gutter = 'default',
    mode = 'default',
    className,
    component,
    children,
    ...props
  },
  ref
) => (
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
      {headline && headline.content && (
        <div
          className={containerClassName({
            width: headlineWidth !== 'unset' ? headlineWidth : undefined,
            align: headlineAlign,
          })}
        >
          <Headline align={headlineAlign} {...headline} />
        </div>
      )}
      {children && (
        <div
          className={containerClassName({
            width: contentWidth !== 'unset' ? contentWidth : undefined,
            align: contentAlign,
            gutter,
            mode,
          })}
        >
          {children}
        </div>
      )}
    </div>
  </div>
);

import {
  FunctionComponent,
  ForwardRefRenderFunction,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import classnames from 'classnames';
import { Headline } from '../headline';
import type { SectionProps } from './typing';

const SectionContainer: FunctionComponent<
  PropsWithChildren<SectionProps & { align?: 'left' | 'center' | 'right' }>
> = ({ width, align, gutter, mode, className, children }) => (
  <div
    className={classnames(
      'l-section__container',
      className,
      width && `l-section__container--${width}`,
      align && align !== 'center' && `l-section__container--${align}`,
      gutter &&
        gutter !== 'default' &&
        `l-section__container--gutter-${gutter}`,
      mode && mode !== 'default' && `l-section__container--${mode}`
    )}
  >
    {children}
  </div>
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
    headlineWidth = 'unset',
    headlineAlign = 'center',
    contentWidth = 'unset',
    contentAlign = 'center',
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
    <SectionContainer
      width={width !== 'default' ? width : undefined}
      className="l-section__container--wrap"
    >
      {headline && headline.content && (
        <SectionContainer
          width={
            headlineWidth !== 'unset'
              ? headlineWidth !== 'default'
                ? headlineWidth
                : undefined
              : width
          }
          align={headlineAlign}
        >
          <Headline align={headlineAlign} {...headline} />
        </SectionContainer>
      )}
      {children && (
        <SectionContainer
          width={
            contentWidth !== 'unset'
              ? contentWidth !== 'default'
                ? contentWidth
                : undefined
              : width
          }
          align={contentAlign}
          gutter={gutter}
          mode={mode}
        >
          {children}
        </SectionContainer>
      )}
    </SectionContainer>
  </div>
);

import {
  FunctionComponent,
  ForwardRefRenderFunction,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { Headline } from '../headline';
import type { SectionProps } from './SectionProps';

const SectionContainer: FunctionComponent<SectionProps> = ({
  width,
  gutter,
  mode,
  children,
}) => (
  <div
    className={classnames(
      'l-section__container',
      width && width !== 'default' && `l-section__container--${width}`,
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
    {headline && headline.content && (
      <SectionContainer width={width}>
        <Headline align="center" {...headline} />
      </SectionContainer>
    )}
    {children && (
      <SectionContainer width={width} gutter={gutter} mode={mode}>
        {children}
      </SectionContainer>
    )}
  </div>
);

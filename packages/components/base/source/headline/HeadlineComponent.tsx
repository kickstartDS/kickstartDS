import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import type { HeadlineProps as HeadlineSchemaProps } from './typing';

export type HeadlineProps = HeadlineSchemaProps & {
  renderContent?: typeof defaultRenderFn;
  renderSubheadline?: typeof defaultRenderFn;
};

export const HeadlineComponent: ForwardRefRenderFunction<
  HTMLElement,
  HeadlineProps & HTMLAttributes<HTMLElement>
> = (
  {
    content,
    level = 'h2',
    styleAs = 'none',
    align = 'left',
    subheadline,
    spaceAfter = 'minimum',
    renderContent = defaultRenderFn,
    renderSubheadline = defaultRenderFn,
    className,
    component,
    ...props
  },
  ref
) => {
  const TagName = level as keyof JSX.IntrinsicElements;
  return (
    <header
      className={classnames(
        'c-headline',
        align && `c-headline--align-${align}`,
        styleAs === 'none'
          ? `c-headline--${level}`
          : styleAs
          ? `c-headline--${styleAs}`
          : '',
        spaceAfter && `c-headline--space-after-${spaceAfter}`,
        className
      )}
      ks-component={component}
      ref={ref}
      {...props}
    >
      <TagName className={classnames('c-headline__headline')}>
        {renderContent(content)}
      </TagName>
      {subheadline && (
        <p className="c-headline__subheadline">
          {renderSubheadline(subheadline)}
        </p>
      )}
    </header>
  );
};

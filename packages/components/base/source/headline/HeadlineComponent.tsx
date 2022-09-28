import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { type HeadlineProps as HeadlineSchemaProps } from './HeadlineProps';

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
    pageHeader,
    subheadline,
    spaceAfter = 'none',
    renderContent = defaultRenderFn,
    renderSubheadline = defaultRenderFn,
    className,
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
        spaceAfter && `c-headline--space-after-${spaceAfter}`,
        { 'c-headline--page-header': pageHeader },
        className
      )}
      ref={ref}
      {...props}
    >
      <TagName
        className={classnames(
          'c-headline__headline',
          styleAs !== 'none' && styleAs !== level && `c-headline__${styleAs}`
        )}
      >
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

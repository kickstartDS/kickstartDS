import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createContext,
} from 'react';
import classnames from 'classnames';
import { withContainer } from '@kickstartds/core/lib/container';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { HeadlineProps } from './HeadlineProps';
import './headline.scss';

interface RenderFunctions {
  renderContent?: renderFn;
  renderSubheadline?: renderFn;
}

const HeadlineComponent: ForwardRefRenderFunction<
  HTMLElement,
  HeadlineProps & RenderFunctions & HTMLAttributes<HTMLElement>
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

export const HeadlineContextDefault = forwardRef(HeadlineComponent);
export const HeadlineContext = createContext(HeadlineContextDefault);
export const Headline = withContainer('headline', HeadlineContext);

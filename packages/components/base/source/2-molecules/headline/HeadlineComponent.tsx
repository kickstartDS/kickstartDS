import {
  FunctionComponent,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { HeadlineProps } from './HeadlineProps';
import './headline.scss';

interface RenderFunctions {
  renderContent?: renderFn;
  renderSubheadline?: renderFn;
}

const HeadlineComponent: FunctionComponent<
  HeadlineProps & RenderFunctions & HTMLAttributes<HTMLElement>
> = ({
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
}) => {
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
      {...props}
    >
      <TagName
        className={classnames(
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

export const HeadlineContextDefault = HeadlineComponent;
export const HeadlineContext = createContext(HeadlineContextDefault);
export const Headline: typeof HeadlineContextDefault = (props) => {
  const Component = useContext(HeadlineContext);
  return <Component {...props} />;
};

import { FunctionComponent, createContext, useContext } from 'react';
import classnames from 'classnames';
import { HeadlineProps } from './HeadlineProps';
import './headline.scss';

const HeadlineComponent: FunctionComponent<HeadlineProps> = ({
  content,
  level = 'h2',
  align = 'left',
  pageHeader,
  subheadline,
  spaceAfter = 'none',
}) => {
  const TagName = level as keyof JSX.IntrinsicElements;
  return (
    <header
      className={classnames(
        'c-headline',
        align && `c-headline--align-${align}`,
        spaceAfter && `c-headline--space-after-${spaceAfter}`,
        { 'c-headline--page-header': pageHeader }
      )}
    >
      <TagName>{content}</TagName>
      {subheadline && <p className="c-headline__subheadline">{subheadline}</p>}
    </header>
  );
};

export const HeadlineContextDefault = HeadlineComponent;
export const HeadlineContext = createContext(HeadlineContextDefault);
export const Headline: typeof HeadlineContextDefault = (props) => {
  const Component = useContext(HeadlineContext);
  return <Component {...props} />;
};

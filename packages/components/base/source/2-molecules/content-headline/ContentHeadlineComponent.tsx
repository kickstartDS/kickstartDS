import { FunctionComponent, createContext, useContext } from 'react';
import classnames from 'classnames';
import { ContentHeadlineProps } from './ContentHeadlineProps';
import './content-headline.scss';

const ContentHeadlineComponent: FunctionComponent<ContentHeadlineProps> = ({
  content,
  level = 'h2',
  align = 'left',
  pageHeader,
  subheader,
  spaceAfter = 'none',
}) => {
  const TagName = level as keyof JSX.IntrinsicElements;
  return (
    <header
      className={classnames(
        'content-headline',
        align && `content-headline--align-${align}`,
        spaceAfter && `content-headline--space-after-${spaceAfter}`,
        { 'content-headline--page-header': pageHeader }
      )}
    >
      <TagName>{content}</TagName>
      {subheader && <p className="content-headline__subheader">{subheader}</p>}
    </header>
  );
};

export const ContentHeadlineContextDefault = ContentHeadlineComponent;
export const ContentHeadlineContext = createContext(
  ContentHeadlineContextDefault
);
export const ContentHeadline: typeof ContentHeadlineContextDefault = (
  props
) => {
  const Component = useContext(ContentHeadlineContext);
  return <Component {...props} />;
};

import {
  createContext,
  FunctionComponent,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { renderFn } from '@kickstartds/core/lib/core';
import { TeaserRowProps } from './TeaserRowProps';
import './teaser-row.scss';
import { Teaser } from '../teaser/TeaserComponent';

interface RenderFunctions {
  renderTopic?: renderFn;
  renderText?: renderFn;
}

const TeaserRowComponent: FunctionComponent<
  TeaserRowProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({ className, ...props }) => (
  <Teaser className={classnames('c-teaser-row', className)} {...props} />
);

export const TeaserRowContextDefault = TeaserRowComponent;
export const TeaserRowContext = createContext(TeaserRowContextDefault);
export const TeaserRow: typeof TeaserRowContextDefault = (props) => {
  const Component = useContext(TeaserRowContext);
  return <Component {...props} />;
};

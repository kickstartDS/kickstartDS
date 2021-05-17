import {
  createContext,
  FunctionComponent,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { TeaserRowProps } from './TeaserRowProps';
import './teaser-row.scss';
import { Teaser, TeaserRenderFunctions } from '../teaser/TeaserComponent';

const TeaserRowComponent: FunctionComponent<
  TeaserRowProps & TeaserRenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({ className, ...props }) => (
  <Teaser className={classnames('c-teaser-row', className)} {...props} />
);

export const TeaserRowContextDefault = TeaserRowComponent;
export const TeaserRowContext = createContext(TeaserRowContextDefault);
export const TeaserRow: typeof TeaserRowContextDefault = (props) => {
  const Component = useContext(TeaserRowContext);
  return <Component {...props} />;
};

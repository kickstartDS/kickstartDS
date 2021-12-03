import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';
import { TeaserRowProps } from './TeaserRowProps';
import './teaser-row.scss';
import { Teaser, TeaserRenderFunctions } from '../teaser/TeaserComponent';

const TeaserRowComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TeaserRowProps & TeaserRenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({ className, ...props }, ref) => (
  <Teaser
    className={classnames('c-teaser-row', className)}
    ref={ref}
    {...props}
  />
);

export const TeaserRowContextDefault = forwardRef(TeaserRowComponent);
export const TeaserRowContext = createContext(TeaserRowContextDefault);
export const TeaserRow: typeof TeaserRowContextDefault = forwardRef(
  (props, ref) => createElement(useContext(TeaserRowContext), { ...props, ref })
);

import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classNames from 'classnames';
import { DividerProps } from './DividerProps';
import './divider.scss';

const DividerComponent: ForwardRefRenderFunction<
  HTMLHRElement,
  DividerProps & HTMLAttributes<HTMLHRElement>
> = ({ variant, className, ...props }, ref) => (
  <hr
    className={classNames(
      'c-divider',
      variant && variant !== 'default' && `c-divider--${variant}`,
      className
    )}
    ref={ref}
    {...props}
  />
);

export const DividerContextDefault = forwardRef(DividerComponent);
export const DividerContext = createContext(DividerContextDefault);
export const Divider: typeof DividerContextDefault = forwardRef((props, ref) =>
  createElement(useContext(DividerContext), { ...props, ref })
);

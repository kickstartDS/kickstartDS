import classNames from 'classnames';
import {
  FunctionComponent,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import { DividerProps } from './DividerProps';
import './divider.scss';

const DividerComponent: FunctionComponent<
  DividerProps & HTMLAttributes<HTMLHRElement>
> = ({ variant, className, ...props }) => (
  <hr
    className={classNames(
      'c-divider',
      variant && variant !== 'default' && `c-divider--${variant}`,
      className
    )}
    {...props}
  />
);

export const DividerContextDefault = DividerComponent;
export const DividerContext = createContext(DividerContextDefault);
export const Divider: typeof DividerContextDefault = (props) => {
  const Component = useContext(DividerContext);
  return <Component {...props} />;
};

import classNames from 'classnames';
import {
  FunctionComponent,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import './divider.scss';

const DividerComponent: FunctionComponent<HTMLAttributes<HTMLHRElement>> = ({
  className,
  ...props
}) => <hr className={classNames('c-divider', className)} {...props} />;

export const DividerContextDefault = DividerComponent;
export const DividerContext = createContext(DividerContextDefault);
export const Divider: typeof DividerContextDefault = (props) => {
  const Component = useContext(DividerContext);
  return <Component {...props} />;
};

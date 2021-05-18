import {
  FunctionComponent,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
  Children,
  cloneElement,
  isValidElement,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { RadioGroupProps } from './RadioGroupProps';
import './radio-group.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const RadioGroupComponent: FunctionComponent<
  RadioGroupProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({
  label,
  name,
  renderLabel = defaultRenderFn,
  children,
  className,
  ...props
}) => (
  <div className={classnames('c-radio-group', className)} {...props}>
    <span className="c-radio-group__label">{renderLabel(label)}</span>
    <div className="c-radio-group__group" role="presentation">
      {Children.map(
        children,
        (child) => isValidElement(child) && cloneElement(child, { name })
      )}
    </div>
  </div>
);

export const RadioGroupContextDefault = RadioGroupComponent;
export const RadioGroupContext = createContext(RadioGroupContextDefault);
export const RadioGroup: typeof RadioGroupContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(RadioGroupContext);
    return <Component {...props} ref={ref} />;
  }
);

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
import '../form-check-group.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const RadioGroupComponent: FunctionComponent<
  RadioGroupProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({
  label,
  name,
  renderLabel = defaultRenderFn,
  invalid,
  invalidMessage,
  children,
  className,
  ...props
}) => (
  <div
    className={classnames('c-form-check-group', className, {
      'c-form-check-group--is-invalid': invalid,
    })}
    {...props}
  >
    <span className="c-form-check-group__label">{renderLabel(label)}</span>
    <div className="c-form-check-group__group" role="presentation">
      {Children.map(
        children,
        (child) => isValidElement(child) && cloneElement(child, { name })
      )}
      {invalid && invalidMessage && (
        <p className="c-form-check__invalid-message">{invalidMessage}</p>
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

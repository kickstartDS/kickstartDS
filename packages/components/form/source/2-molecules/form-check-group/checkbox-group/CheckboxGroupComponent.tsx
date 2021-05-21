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
import { CheckboxGroupProps } from './CheckboxGroupProps';
import '../form-check-group.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const CheckboxGroupComponent: FunctionComponent<
  CheckboxGroupProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({
  label,
  name,
  renderLabel = defaultRenderFn,
  children,
  className,
  ...props
}) => (
  <div className={classnames('c-form-check-group', className)} {...props}>
    <span className="c-form-check-group__label">{renderLabel(label)}</span>
    <div className="c-form-check-group__group" role="presentation">
      {Children.map(
        children,
        (child) => isValidElement(child) && cloneElement(child, { name })
      )}
    </div>
  </div>
);

export const CheckboxGroupContextDefault = CheckboxGroupComponent;
export const CheckboxGroupContext = createContext(CheckboxGroupContextDefault);
export const CheckboxGroup: typeof CheckboxGroupContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(CheckboxGroupContext);
    return <Component {...props} ref={ref} />;
  }
);

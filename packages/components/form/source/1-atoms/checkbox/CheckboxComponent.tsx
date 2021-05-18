import {
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { CheckboxProps } from './CheckboxProps';
import './checkbox.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const CheckboxComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps & RenderFunctions & HTMLAttributes<HTMLInputElement>
> = ({ label, renderLabel = defaultRenderFn, className, ...props }, ref) => (
  <label className="c-checkbox">
    <input
      className={classnames('c-checkbox__input', className)}
      type="checkbox"
      ref={ref}
      {...props}
    />
    <span className="c-checkbox__box"></span>
    <span className="c-checkbox__label">{renderLabel(label)}</span>
  </label>
);

export const CheckboxContextDefault = forwardRef(CheckboxComponent);
export const CheckboxContext = createContext(CheckboxContextDefault);
export const Checkbox: typeof CheckboxContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(CheckboxContext);
    return <Component {...props} ref={ref} />;
  }
);

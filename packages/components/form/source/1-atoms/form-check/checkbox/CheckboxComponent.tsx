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
import '../form-check.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const CheckboxComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps & RenderFunctions & HTMLAttributes<HTMLInputElement>
> = (
  {
    label,
    renderLabel = defaultRenderFn,
    invalid,
    invalidMessage,
    className,
    ...props
  },
  ref
) => (
  <label className="c-form-check c-form-check--checkbox">
    <div className="c-form-check__field">
      <input
        className={classnames('c-form-check__input', className, {
          'c-form-check__input--is-invalid': invalid,
        })}
        type="checkbox"
        ref={ref}
        {...props}
      />
      <span className="c-form-check__box"></span>
      <span className="c-form-check__label">{renderLabel(label)}</span>
    </div>
    {invalid && invalidMessage && (
      <p className="c-form-check__invalid-message">{invalidMessage}</p>
    )}
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

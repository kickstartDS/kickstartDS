import {
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
  createElement,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { RadioButtonProps } from './RadioProps';
import '../form-check.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

export const RadioComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  RadioButtonProps & RenderFunctions & HTMLAttributes<HTMLInputElement>
> = (
  {
    label,
    renderLabel = defaultRenderFn,
    invalid,
    invalidMessage,
    hint,
    className,
    ...props
  },
  ref
) => (
  <label className="c-form-check c-form-check--radio">
    <div className="c-form-check__field">
      <input
        className={classnames('c-form-check__input', className, {
          'c-form-check__input--is-invalid': invalid,
        })}
        type="radio"
        ref={ref}
        {...props}
      />
      <span className="c-form-check__box"></span>
      <span className="c-form-check__label">{renderLabel(label)}</span>
    </div>

    {invalid && invalidMessage && (
      <p className="c-form-check__invalid-message">{invalidMessage}</p>
    )}

    {hint && <p className="c-form-check__hint">{hint}</p>}
  </label>
);

export const RadioContextDefault = forwardRef(RadioComponent);
export const RadioContext = createContext(RadioContextDefault);
export const Radio: typeof RadioContextDefault = forwardRef((props, ref) =>
  createElement(useContext(RadioContext), { ...props, ref })
);

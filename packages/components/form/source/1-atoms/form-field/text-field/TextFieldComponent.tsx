import {
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '@kickstartds/base/lib/icon';
import { TextFieldProps } from './TextFieldProps';
import '../form-field.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const TextFieldComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps & RenderFunctions & HTMLAttributes<HTMLInputElement>
> = (
  {
    type = 'text',
    label,
    hideLabel,
    renderLabel = defaultRenderFn,
    invalid,
    invalidMessage,
    hint,
    icon,
    className,
    ...props
  },
  ref
) => (
  <label className="c-form-field">
    <span
      className={classnames('c-form-field__label', {
        'c-form-field__label--hidden': hideLabel,
      })}
    >
      {renderLabel(label)}
    </span>
    <div className="c-form-field__field">
      {icon && <Icon icon={icon} aria-hidden="true" focusable="false" />}
      <input
        className={classnames(
          'c-form-field__input',
          {
            'c-form-field__input--is-invalid': invalid,
          },
          className
        )}
        type={type}
        ref={ref}
        {...props}
      />
    </div>

    {invalid && invalidMessage && (
      <p className="c-form-field__invalid-message">{invalidMessage}</p>
    )}

    {hint && <p className="c-form-field__hint">{hint}</p>}
  </label>
);

export const TextFieldContextDefault = forwardRef(TextFieldComponent);
export const TextFieldContext = createContext(TextFieldContextDefault);
export const TextField: typeof TextFieldContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(TextFieldContext);
    return <Component {...props} ref={ref} />;
  }
);

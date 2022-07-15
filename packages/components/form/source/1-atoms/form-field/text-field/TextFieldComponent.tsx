import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '@kickstartds/base/lib/icon';
import { type TextFieldProps as TextFieldSchemaProps } from './TextFieldProps';

export type TextFieldProps = TextFieldSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
};

export const TextFieldComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps & HTMLAttributes<HTMLInputElement>
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

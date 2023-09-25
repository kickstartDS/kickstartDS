import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '@kickstartds/base/lib/icon';
import type { TextFieldProps as TextFieldSchemaProps } from './typing';

export type TextFieldProps = TextFieldSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
};

export const TextFieldComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps & InputHTMLAttributes<HTMLInputElement>
> = (
  {
    type = 'text',
    label,
    hideLabel,
    renderLabel = defaultRenderFn,
    labelProps = {},
    invalid,
    invalidMessage,
    hint,
    icon,
    className,
    component,
    ...props
  },
  ref
) => {
  const { className: labelClassName, ...otherLabelProps } = labelProps;
  return (
    <label
      className={classnames('c-form-field', labelClassName)}
      {...otherLabelProps}
    >
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
          ks-component={component}
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
};

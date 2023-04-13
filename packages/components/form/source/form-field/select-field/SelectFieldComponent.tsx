import {
  ForwardRefRenderFunction,
  LabelHTMLAttributes,
  SelectHTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '@kickstartds/base/lib/icon';
import type { SelectFieldProps as SelectFieldSchemaProps } from './SelectFieldProps';

export type SelectFieldProps = SelectFieldSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
};

export const SelectFieldComponent: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectFieldProps & SelectHTMLAttributes<HTMLSelectElement>
> = (
  {
    label,
    hideLabel,
    renderLabel = defaultRenderFn,
    labelProps = {},
    invalid,
    invalidMessage,
    hint,
    options,
    icon = 'chevron-down',
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
        <Icon icon={icon} aria-hidden="true" focusable="false" />
        <select
          className={classnames(
            'c-form-field__input',
            {
              'c-form-field__input--is-invalid': invalid,
            },
            className
          )}
          ks-component={component}
          ref={ref}
          {...props}
        >
          {options &&
            options.map((option, i) => (
              <option
                key={`option-${i}`}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
        </select>
      </div>

      {invalid && invalidMessage && (
        <p className="c-form-field__invalid-message">{invalidMessage}</p>
      )}

      {hint && <p className="c-form-field__hint">{hint}</p>}
    </label>
  );
};

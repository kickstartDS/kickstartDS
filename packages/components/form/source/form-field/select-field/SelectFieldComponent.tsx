import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '@kickstartds/base/lib/icon';
import { type SelectFieldProps as SelectFieldSchemaProps } from './SelectFieldProps';

export type SelectFieldProps = SelectFieldSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
};

export const SelectFieldComponent: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectFieldProps & HTMLAttributes<HTMLSelectElement>
> = (
  {
    label,
    hideLabel,
    renderLabel = defaultRenderFn,
    invalid,
    invalidMessage,
    hint,
    options,
    icon = 'chevron-down',
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
      <Icon icon={icon} aria-hidden="true" focusable="false" />
      <select
        className={classnames(
          'c-form-field__input',
          {
            'c-form-field__input--is-invalid': invalid,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {options &&
          options.map((option, i) => (
            <option
              key={`option-${i}`}
              value={option.value}
              selected={option.selected}
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

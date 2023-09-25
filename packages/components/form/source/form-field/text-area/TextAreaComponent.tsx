import {
  ForwardRefRenderFunction,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '@kickstartds/base/lib/icon';
import type { TextAreaProps as TextAreaSchemaProps } from './typing';

export type TextAreaProps = TextAreaSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
};

export const TextAreaComponent: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
> = (
  {
    value,
    label,
    hideLabel,
    renderLabel = defaultRenderFn,
    labelProps = {},
    icon,
    invalid,
    invalidMessage,
    hint,
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
        <textarea
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
          {value}
        </textarea>
      </div>

      {invalid && invalidMessage && (
        <p className="c-form-field__invalid-message">{invalidMessage}</p>
      )}

      {hint && <p className="c-form-field__hint">{hint}</p>}
    </label>
  );
};

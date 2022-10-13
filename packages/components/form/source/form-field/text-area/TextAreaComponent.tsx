import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/core';
import { Icon } from '@kickstartds/base/icon';
import { type TextAreaProps as TextAreaSchemaProps } from './TextAreaProps';

export type TextAreaProps = TextAreaSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
};

export const TextAreaComponent: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps & HTMLAttributes<HTMLTextAreaElement>
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

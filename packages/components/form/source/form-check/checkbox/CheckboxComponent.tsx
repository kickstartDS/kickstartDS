import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  InputHTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import type { CheckboxProps as CheckboxSchemaProps } from './CheckboxProps';

export type CheckboxProps = CheckboxSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
};

export const CheckboxComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps & InputHTMLAttributes<HTMLInputElement>
> = (
  {
    label,
    renderLabel = defaultRenderFn,
    labelProps = {},
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
      className={classnames(
        'c-form-check c-form-check--checkbox',
        labelClassName
      )}
      {...otherLabelProps}
    >
      <div className="c-form-check__field">
        <input
          className={classnames('c-form-check__input', className, {
            'c-form-check__input--is-invalid': invalid,
          })}
          type="checkbox"
          ks-component={component}
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
};

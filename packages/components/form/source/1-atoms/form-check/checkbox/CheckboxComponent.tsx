import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { type CheckboxProps as CheckboxSchemaProps } from './CheckboxProps';

export type CheckboxProps = CheckboxSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
};

export const CheckboxComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps & HTMLAttributes<HTMLInputElement>
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

    {hint && <p className="c-form-check__hint">{hint}</p>}
  </label>
);

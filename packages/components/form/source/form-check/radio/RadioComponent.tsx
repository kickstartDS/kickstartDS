import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import type { RadioButtonProps as RadioButtonSchemaProps } from './RadioProps';

export type RadioButtonProps = RadioButtonSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
};

export const RadioComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  RadioButtonProps & HTMLAttributes<HTMLInputElement>
> = (
  {
    label,
    renderLabel = defaultRenderFn,
    labelProps = {},
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
      className={classnames('c-form-check c-form-check--radio', labelClassName)}
      {...otherLabelProps}
    >
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
};

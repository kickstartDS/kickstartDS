import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Checkbox } from '../../form-check/checkbox';
import type { CheckboxGroupProps as CheckboxGroupSchemaProps } from './typing';

export type CheckboxGroupProps = CheckboxGroupSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
};

export const CheckboxGroupComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  CheckboxGroupProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    label,
    name,
    renderLabel = defaultRenderFn,
    invalid,
    invalidMessage,
    options,
    className,
    component,
    ...props
  },
  ref
) => (
  <div
    className={classnames('c-form-check-group', className, {
      'c-form-check-group--is-invalid': invalid,
    })}
    ks-component={component}
    ref={ref}
    {...props}
  >
    <span className="c-form-check-group__label">{renderLabel(label)}</span>
    <div className="c-form-check-group__group" role="presentation">
      {options && options.length
        ? options.map((option, index) => (
            <Checkbox {...option} name={name} key={`checkbox-${index}`} />
          ))
        : null}
      {invalid && invalidMessage && (
        <p className="c-form-check__invalid-message">{invalidMessage}</p>
      )}
    </div>
  </div>
);

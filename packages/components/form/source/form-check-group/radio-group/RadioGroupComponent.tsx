import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Radio } from '../../form-check/radio';
import type { RadioGroupProps as RadioGroupSchemaProps } from './typing';

export type RadioGroupProps = RadioGroupSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
};

export const RadioGroupComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  RadioGroupProps & HTMLAttributes<HTMLDivElement>
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
            <Radio {...option} name={name} key={`radio-${index}`} />
          ))
        : null}
      {invalid && invalidMessage && (
        <p className="c-form-check__invalid-message">{invalidMessage}</p>
      )}
    </div>
  </div>
);

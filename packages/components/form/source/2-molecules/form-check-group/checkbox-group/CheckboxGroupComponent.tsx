import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Checkbox } from '../../../1-atoms/form-check/checkbox/CheckboxComponent';
import { CheckboxGroupProps } from './CheckboxGroupProps';
import '../form-check-group.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const CheckboxGroupComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  CheckboxGroupProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = (
  {
    label,
    name,
    renderLabel = defaultRenderFn,
    invalid,
    invalidMessage,
    options,
    className,
    ...props
  },
  ref
) => (
  <div
    className={classnames('c-form-check-group', className, {
      'c-form-check-group--is-invalid': invalid,
    })}
    ref={ref}
    {...props}
  >
    <span className="c-form-check-group__label">{renderLabel(label)}</span>
    <div className="c-form-check-group__group" role="presentation">
      {options &&
        options.length &&
        options.map((option, index) => (
          <Checkbox {...option} name={name} key={`checkbox-${index}`} />
        ))}
      {invalid && invalidMessage && (
        <p className="c-form-check__invalid-message">{invalidMessage}</p>
      )}
    </div>
  </div>
);

export const CheckboxGroupContextDefault = forwardRef(CheckboxGroupComponent);
export const CheckboxGroupContext = createContext(CheckboxGroupContextDefault);
export const CheckboxGroup: typeof CheckboxGroupContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(CheckboxGroupContext), { ...props, ref })
);

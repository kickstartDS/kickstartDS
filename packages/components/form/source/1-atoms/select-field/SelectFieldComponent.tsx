import {
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { SelectFieldProps } from './SelectFieldProps';
import './select-field.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const SelectFieldComponent: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectFieldProps & RenderFunctions & HTMLAttributes<HTMLSelectElement>
> = ({ label, renderLabel = defaultRenderFn, options, ...props }, ref) => (
  <label className="c-select-field">
    <span className="c-select-field__label">{renderLabel(label)}</span>
    <div className="c-select-field__input">
      <select ref={ref} {...props}>
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
  </label>
);

export const SelectFieldContextDefault = forwardRef(SelectFieldComponent);
export const SelectFieldContext = createContext(SelectFieldContextDefault);
export const SelectField: typeof SelectFieldContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(SelectFieldContext);
    return <Component {...props} ref={ref} />;
  }
);

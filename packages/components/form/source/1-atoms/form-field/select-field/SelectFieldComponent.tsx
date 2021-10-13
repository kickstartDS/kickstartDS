import {
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '@kickstartds/base/lib/icon';
import { SelectFieldProps } from './SelectFieldProps';
import '../form-field.scss';
import './combo-box.scss';
import './lazyComboBox.js';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const SelectFieldComponent: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectFieldProps & RenderFunctions & HTMLAttributes<HTMLSelectElement>
> = (
  {
    label,
    hideLabel,
    renderLabel = defaultRenderFn,
    invalid,
    invalidMessage,
    hint,
    options,
    filter,
    filterPlaceholder,
    className,
    ...props
  },
  ref
) => (
  <label
    className={classnames('c-form-field', filter && 'c-combo-box lazyload')}
    data-component={filter ? 'form.combo-box' : null}
    data-filter-placeholder={filter ? filterPlaceholder : null}
  >
    <span
      className={classnames('c-form-field__label', {
        'c-form-field__label--hidden': hideLabel,
      })}
    >
      {renderLabel(label)}
    </span>
    <div className="c-form-field__field">
      <Icon icon="chevron-down" aria-hidden={true} focusable={false} />
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

export const SelectFieldContextDefault = forwardRef(SelectFieldComponent);
export const SelectFieldContext = createContext(SelectFieldContextDefault);
export const SelectField: typeof SelectFieldContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(SelectFieldContext);
    return <Component {...props} ref={ref} />;
  }
);

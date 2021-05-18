import { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { SelectFieldProps } from './SelectFieldProps';
import './select-field.scss';

export const SelectField: FunctionComponent<
  SelectFieldProps & HTMLAttributes<HTMLLabelElement>
> = ({ name, value, disabled, label, options, className }) => (
  <label className={classnames('c-select-field', className)}>
    <span className="c-select-field__label">{label}</span>
    <div className="c-select-field__input">
      <select name={name} disabled={disabled} defaultValue={value}>
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

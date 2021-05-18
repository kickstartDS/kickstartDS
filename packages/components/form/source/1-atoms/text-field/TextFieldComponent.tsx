import { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { TextFieldProps } from './TextFieldProps';
import './text-field.scss';

export const TextField: FunctionComponent<
  TextFieldProps & HTMLAttributes<HTMLLabelElement>
> = ({
  name,
  value,
  disabled,
  type = 'text',
  label,
  placeholder,
  inputMode,
  className,
}) => (
  <label className={classnames('c-text-field', className)}>
    <span className="c-text-field__label">{label}</span>
    <div className="c-text-field__input">
      <input
        type={type}
        name={name}
        disabled={disabled}
        defaultValue={value}
        placeholder={placeholder}
        inputMode={inputMode}
      />
    </div>
  </label>
);

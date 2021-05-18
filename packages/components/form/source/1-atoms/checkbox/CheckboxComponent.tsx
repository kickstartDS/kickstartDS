import { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { CheckboxProps } from './CheckboxProps';
import './checkbox.scss';

export const Checkbox: FunctionComponent<
  CheckboxProps & HTMLAttributes<HTMLInputElement>
> = ({ name, value, disabled, selected, label, className }) => (
  <label className={classnames('c-checkbox', className)}>
    <input
      className="c-checkbox__input"
      type="checkbox"
      name={name}
      disabled={disabled}
      defaultChecked={selected}
      defaultValue={value}
    />
    <span className="c-checkbox__box"></span>
    <span className="c-checkbox__label">{label}</span>
  </label>
);

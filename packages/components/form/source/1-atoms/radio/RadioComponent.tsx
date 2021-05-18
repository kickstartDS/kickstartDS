import { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { RadioButtonProps } from './RadioProps';
import './radio.scss';

export const Radio: FunctionComponent<
  RadioButtonProps & HTMLAttributes<HTMLInputElement>
> = ({ name, value, disabled, selected, label, className }) => (
  <label className={classnames('c-radio', className)}>
    <input
      className="c-radio__input"
      type="radio"
      name={name}
      disabled={disabled}
      defaultChecked={selected}
      defaultValue={value}
    />
    <span className="c-radio__box"></span>
    <span className="c-radio__label">{label}</span>
  </label>
);

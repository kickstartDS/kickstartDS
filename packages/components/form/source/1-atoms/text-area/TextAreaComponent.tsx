import { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { TextAreaProps } from './TextAreaProps';
import './text-area.scss';

export const TextArea: FunctionComponent<
  TextAreaProps & HTMLAttributes<HTMLLabelElement>
> = ({ name, value, disabled, label, placeholder, className }) => (
  <label className={classnames('c-text-area', className)}>
    <span className="c-text-area__label">{label}</span>
    <div className="c-text-area__input">
      <textarea name={name} disabled={disabled} placeholder={placeholder}>
        {value}
      </textarea>
    </div>
  </label>
);

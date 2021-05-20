import {
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { TextFieldProps } from './TextFieldProps';
import './text-field.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const TextFieldComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps & RenderFunctions & HTMLAttributes<HTMLInputElement>
> = (
  { type = 'text', label, hideLabel, renderLabel = defaultRenderFn, ...props },
  ref
) => (
  <label className="c-text-field">
    <span
      className={classnames('c-text-field__label', {
        'c-text-field__label--hidden': hideLabel,
      })}
    >
      {renderLabel(label)}
    </span>
    <div className="c-text-field__input">
      <input type={type} ref={ref} {...props} />
    </div>
  </label>
);

export const TextFieldContextDefault = forwardRef(TextFieldComponent);
export const TextFieldContext = createContext(TextFieldContextDefault);
export const TextField: typeof TextFieldContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(TextFieldContext);
    return <Component {...props} ref={ref} />;
  }
);

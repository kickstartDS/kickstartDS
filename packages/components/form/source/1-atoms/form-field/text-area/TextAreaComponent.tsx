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
import { Icon } from '@kickstartds/base/lib/icon';
import { TextAreaProps } from './TextAreaProps';
import '../form-field.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const TextAreaComponent: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps & RenderFunctions & HTMLAttributes<HTMLTextAreaElement>
> = (
  {
    value,
    label,
    hideLabel,
    renderLabel = defaultRenderFn,
    icon,
    invalid,
    invalidMessage,
    hint,
    className,
    ...props
  },
  ref
) => (
  <label className="c-form-field">
    <span
      className={classnames('c-form-field__label', {
        'c-form-field__label--hidden': hideLabel,
      })}
    >
      {renderLabel(label)}
    </span>
    <div className="c-form-field__field">
      {icon && <Icon icon={icon} aria-hidden="true" focusable="false" />}
      <textarea
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
        {value}
      </textarea>
    </div>

    {invalid && invalidMessage && (
      <p className="c-form-field__invalid-message">{invalidMessage}</p>
    )}

    {hint && <p className="c-form-field__hint">{hint}</p>}
  </label>
);

export const TextAreaContextDefault = forwardRef(TextAreaComponent);
export const TextAreaContext = createContext(TextAreaContextDefault);
export const TextArea: typeof TextAreaContextDefault = forwardRef(
  (props, ref) => createElement(useContext(TextAreaContext), { ...props, ref })
);

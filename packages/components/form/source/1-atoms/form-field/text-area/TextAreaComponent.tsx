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
    invalid,
    icon,
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
        className={classnames('c-form-field__input', {
          'c-form-field__input--is-invalid': invalid,
        })}
        ref={ref}
        {...props}
      >
        {value}
      </textarea>
    </div>
  </label>
);

export const TextAreaContextDefault = forwardRef(TextAreaComponent);
export const TextAreaContext = createContext(TextAreaContextDefault);
export const TextArea: typeof TextAreaContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(TextAreaContext);
    return <Component {...props} ref={ref} />;
  }
);

import {
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
  useState,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn, uid } from '@kickstartds/core/lib/core';
import { Icon } from '@kickstartds/base/lib/icon';
import { ComboBoxProps } from './ComboBoxProps';
import '../form-field.scss';
import './combo-box.scss';
import './lazyComboBox.js';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const ComboBoxComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  ComboBoxProps & RenderFunctions & HTMLAttributes<HTMLInputElement>
> = (
  {
    label,
    hideLabel,
    renderLabel = defaultRenderFn,
    invalid,
    invalidMessage,
    hint,
    options,
    className,
    ...props
  },
  ref
) => {
  const [listId] = useState(uid());
  return (
    <label className="c-form-field c-combo-box" data-component="form.combo-box">
      <span
        className={classnames('c-form-field__label', {
          'c-form-field__label--hidden': hideLabel,
        })}
      >
        {renderLabel(label)}
      </span>
      <div className="c-form-field__field">
        <Icon icon="chevron-down" aria-hidden="true" focusable="false" />
        <input
          className={classnames(
            'c-form-field__input',
            {
              'c-form-field__input--is-invalid': invalid,
            },
            className
          )}
          type="text"
          ref={ref}
          list={listId}
          {...props}
        />
        <datalist id={listId}>
          {options &&
            options.map((option, i) => (
              <option key={`option-${i}`}>{option}</option>
            ))}
        </datalist>
      </div>

      {invalid && invalidMessage && (
        <p className="c-form-field__invalid-message">{invalidMessage}</p>
      )}

      {hint && <p className="c-form-field__hint">{hint}</p>}
    </label>
  );
};
export const ComboBoxContextDefault = forwardRef(ComboBoxComponent);
export const ComboBoxContext = createContext(ComboBoxContextDefault);
export const ComboBox: typeof ComboBoxContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(ComboBoxContext);
    return <Component {...props} ref={ref} />;
  }
);

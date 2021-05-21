import {
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { RadioButtonProps } from './RadioProps';
import '../form-check.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

export const RadioComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  RadioButtonProps & RenderFunctions & HTMLAttributes<HTMLInputElement>
> = (
  { label, renderLabel = defaultRenderFn, invalid, className, ...props },
  ref
) => (
  <label className="c-form-check c-form-check--radio">
    <input
      className={classnames('c-form-check__input', className, {
        'c-form-check__input--is-invalid': invalid,
      })}
      type="radio"
      ref={ref}
      {...props}
    />
    <span className="c-form-check__box"></span>
    <span className="c-form-check__label">{renderLabel(label)}</span>
  </label>
);

export const RadioContextDefault = forwardRef(RadioComponent);
export const RadioContext = createContext(RadioContextDefault);
export const Radio: typeof RadioContextDefault = forwardRef((props, ref) => {
  const Component = useContext(RadioContext);
  return <Component {...props} ref={ref} />;
});

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
import './radio.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

export const RadioComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  RadioButtonProps & RenderFunctions & HTMLAttributes<HTMLInputElement>
> = ({ label, renderLabel = defaultRenderFn, className, ...props }, ref) => (
  <label className="c-radio">
    <input
      className={classnames('c-radio__input', className)}
      type="radio"
      ref={ref}
      {...props}
    />
    <span className="c-radio__box"></span>
    <span className="c-radio__label">{renderLabel(label)}</span>
  </label>
);

export const RadioContextDefault = forwardRef(RadioComponent);
export const RadioContext = createContext(RadioContextDefault);
export const Radio: typeof RadioContextDefault = forwardRef((props, ref) => {
  const Component = useContext(RadioContext);
  return <Component {...props} ref={ref} />;
});

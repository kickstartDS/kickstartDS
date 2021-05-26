import {
  FunctionComponent,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Radio } from '../../../1-atoms/form-check/radio/RadioComponent';
import { RadioGroupProps } from './RadioGroupProps';
import '../form-check-group.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const RadioGroupComponent: FunctionComponent<
  RadioGroupProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({
  label,
  name,
  renderLabel = defaultRenderFn,
  invalid,
  invalidMessage,
  options,
  className,
  ...props
}) => (
  <div
    className={classnames('c-form-check-group', className, {
      'c-form-check-group--is-invalid': invalid,
    })}
    {...props}
  >
    <span className="c-form-check-group__label">{renderLabel(label)}</span>
    <div className="c-form-check-group__group" role="presentation">
      {options &&
        options.length &&
        options.map((option, index) => (
          <Radio {...option} name={name} key={`radio-${index}`} />
        ))}
      {invalid && invalidMessage && (
        <p className="c-form-check__invalid-message">{invalidMessage}</p>
      )}
    </div>
  </div>
);

export const RadioGroupContextDefault = RadioGroupComponent;
export const RadioGroupContext = createContext(RadioGroupContextDefault);
export const RadioGroup: typeof RadioGroupContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(RadioGroupContext);
    return <Component {...props} ref={ref} />;
  }
);

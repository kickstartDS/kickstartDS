import {
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { TextAreaProps } from './TextAreaProps';
import './text-area.scss';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const TextAreaComponent: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps & RenderFunctions & HTMLAttributes<HTMLTextAreaElement>
> = ({ value, label, renderLabel = defaultRenderFn, ...props }, ref) => (
  <label className="c-text-area">
    <span className="c-text-area__label">{renderLabel(label)}</span>
    <div className="c-text-area__input">
      <textarea ref={ref} {...props}>
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

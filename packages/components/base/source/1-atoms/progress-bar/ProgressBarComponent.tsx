import {
  CSSProperties,
  FunctionComponent,
  HTMLAttributes,
  createContext,
  createElement,
  useContext,
} from 'react';
import classNames from 'classnames';
import { ProgressBarProps } from './ProgressBarProps';
import './progress-bar.scss';

interface ProgressBarCSSProperties extends CSSProperties {
  '--c-progress-bar_value--width': string;
}

const ProgressBarComponent: FunctionComponent<
  ProgressBarProps & HTMLAttributes<HTMLDivElement>
> = ({ max = 1, value = 0, indeterminate, className }) => {
  const percent = !indeterminate && max && `${(value / max) * 100}%`;
  return (
    <div
      aria-valuemin={0}
      aria-valuemax={indeterminate ? null : max}
      aria-valuenow={indeterminate ? null : value}
      className={classNames(
        'c-progress-bar',
        indeterminate && 'c-progress-bar--indeterminate',
        className
      )}
      style={
        percent
          ? ({
              '--c-progress-bar_value--width': percent,
            } as ProgressBarCSSProperties)
          : null
      }
    >
      <div className="c-progress-bar__value" />
      {percent && <span className="hidden-visually">{percent}</span>}
    </div>
  );
};
export const ProgressBarContextDefault = ProgressBarComponent;
export const ProgressBarContext = createContext(ProgressBarContextDefault);
export const ProgressBar: typeof ProgressBarContextDefault = (props) =>
  createElement(useContext(ProgressBarContext), props);

import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classNames from 'classnames';
import './iframe-ratio.scss';
import './IframeRatio.js';

type IframeRatioProps = {
  src: string;
  title?: string;
  width: number;
  height: number;
  setParentWidth?: boolean;
};

export const IframeRatioComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  IframeRatioProps & HTMLAttributes<HTMLDivElement>
> = (
  { src, title, width, height, setParentWidth, className, ...props },
  ref
) => (
  <div
    className={classNames('iframe-ratio', className)}
    data-component="base.iframe-ratio"
    data-auto-width={setParentWidth}
    ref={ref}
    {...props}
  >
    <iframe
      allowFullScreen
      data-src={src}
      title={title}
      className="lazyload"
      width={width}
      height={height}
    ></iframe>
  </div>
);

export const IframeRatioContextDefault = forwardRef(IframeRatioComponent);
export const IframeRatioContext = createContext(IframeRatioContextDefault);
export const IframeRatio: typeof IframeRatioContextDefault = forwardRef(
  (props, ref) =>
    createElement(useContext(IframeRatioContext), { ...props, ref })
);

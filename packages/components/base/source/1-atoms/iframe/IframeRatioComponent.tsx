import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';

export type IframeRatioProps = {
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

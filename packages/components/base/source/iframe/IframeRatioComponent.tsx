import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';

export type IframeRatioProps = {
  src: string;
  title?: string;
  width: number;
  height: number;
  setParentWidth?: boolean;
  component?: string;
};

export const IframeRatioComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  IframeRatioProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    src,
    title,
    width,
    height,
    setParentWidth,
    className,
    component = 'base.iframe-ratio',
    ...props
  },
  ref
) => (
  <div
    className={classNames('iframe-ratio', className)}
    ks-component={component}
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

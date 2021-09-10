import { FunctionComponent, HTMLAttributes } from 'react';
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

export const IframeRatio: FunctionComponent<
  IframeRatioProps & HTMLAttributes<HTMLDivElement>
> = ({ src, title, width, height, setParentWidth, className, ...props }) => (
  <div
    className={classNames('iframe-ratio', className)}
    data-component="base.iframe-ratio"
    data-auto-width={setParentWidth}
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

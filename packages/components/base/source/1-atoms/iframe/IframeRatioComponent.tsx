import { FunctionComponent } from 'react';
import './iframe-ratio.scss';
import './IframeRatio.js';

type IframeRatioProps = {
  src: string;
  title?: string;
  width: number;
  height: number;
  setParentWidth?: boolean;
};

export const IframeRatio: FunctionComponent<IframeRatioProps> = ({
  src,
  title,
  width,
  height,
  setParentWidth,
}) => (
  <div
    className="iframe-ratio"
    data-component="base.iframe-ratio"
    data-auto-width={setParentWidth}
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

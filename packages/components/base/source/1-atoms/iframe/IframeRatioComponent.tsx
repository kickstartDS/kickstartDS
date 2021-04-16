import { FunctionComponent } from 'react';
import './iframe-ratio.scss';

type IframeRatioProps = {
  src: string;
  title?: string;
  width: number;
  height: number;
};

export const IframeRatio: FunctionComponent<IframeRatioProps> = ({
  src,
  title,
  width,
  height,
}) => (
  <div className="iframe-ratio" data-component="base.iframe-ratio">
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

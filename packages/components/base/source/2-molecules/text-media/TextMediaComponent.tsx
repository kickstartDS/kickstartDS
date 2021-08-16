import { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { renderFn } from '@kickstartds/core/lib/core';
import { Picture } from '../../1-atoms/image/picture';
import { LightboxLazyImage } from '../../1-atoms/image/lightbox-image';
import { IframeRatio } from '../../1-atoms/iframe';
import { RichText, defaultRenderFn } from '../../1-atoms/rich-text';
import {
  TextMediaProps,
  TextMediaVideo as IVideo,
  TextMediaImage as IImage,
  TextMediaLazyImage as ILightboxImage,
  Media as IMedia,
  FullWidthMedia as TFullWidthMedia,
  Caption as TCaption,
} from './TextMediaProps';
import './text-media.scss';

export interface RenderFunctions {
  renderText?: renderFn;
}

const figureClassName = (full: TFullWidthMedia) =>
  classnames('text-media__media', {
    'text-media__media--full': full,
  });
const Figure: FunctionComponent<{
  full?: TFullWidthMedia;
  caption?: TCaption;
}> = ({ full, caption, children }) => (
  <figure className={figureClassName(full)}>
    {children}
    {caption ? (
      <figcaption className="text-media__caption">{caption}</figcaption>
    ) : null}
  </figure>
);

const Video: FunctionComponent<IVideo> = ({ full, caption, video }) => (
  <Figure full={full} caption={caption}>
    {video.iframe ? (
      <IframeRatio {...video} setParentWidth={true} />
    ) : (
      <>
        <video
          controls
          className="lazyload"
          title={video.title}
          data-src={video.src}
        ></video>
        <noscript>
          <video controls title={video.title} src={video.src}></video>
        </noscript>
      </>
    )}
  </Figure>
);
const Image: FunctionComponent<IImage> = ({ full, caption, image }) => (
  <Figure full={full} caption={caption}>
    <Picture {...image} />
  </Figure>
);
const LightboxImage: FunctionComponent<ILightboxImage> = ({
  full,
  caption,
  lightboxImage,
}) => (
  <LightboxLazyImage
    {...lightboxImage}
    className={figureClassName(full)}
    caption={lightboxImage.caption || caption}
  />
);

const Media: FunctionComponent<{ media: IMedia }> = ({ media }) =>
  media.length ? (
    <div className="text-media__gallery">
      {media.map((m, i) =>
        (m.video as IVideo)?.src ? (
          <Video {...(m as IVideo)} key={i} />
        ) : (m.image as IImage)?.src ? (
          <Image {...(m as IImage)} key={i} />
        ) : (m.lightboxImage as ILightboxImage)?.image ? (
          <LightboxImage {...(m.lightboxImage as ILightboxImage)} key={i} />
        ) : null
      )}
    </div>
  ) : null;

export const TextMedia: FunctionComponent<
  TextMediaProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({
  text = '',
  media,
  mediaAlignment,
  renderText = defaultRenderFn,
  className,
  ...props
}) => (
  <div
    className={classnames(
      'text-media',
      {
        'text-media--above': mediaAlignment?.startsWith('above'),
        'text-media--beside': mediaAlignment?.startsWith('beside'),
        'text-media--intext':
          mediaAlignment?.startsWith('intext') ||
          mediaAlignment?.startsWith('beside'),
        'text-media--below': mediaAlignment?.startsWith('below'),
        'text-media--left': mediaAlignment?.endsWith('left'),
        'text-media--center': mediaAlignment?.endsWith('center'),
        'text-media--right': mediaAlignment?.endsWith('right'),
      },
      className
    )}
    {...props}
  >
    {mediaAlignment?.startsWith('below') ? (
      <>
        <RichText
          className="text-media__text"
          text={text}
          renderText={renderText}
        />
        <Media media={media} />
      </>
    ) : (
      <>
        <Media media={media} />
        <RichText
          className="text-media__text"
          text={text}
          renderText={renderText}
        />
      </>
    )}
  </div>
);

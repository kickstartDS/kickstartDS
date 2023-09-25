import {
  FunctionComponent,
  ForwardRefRenderFunction,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import classnames from 'classnames';
import { Picture } from '../image/picture';
import { LightboxImage } from '../image/lightbox-image';
import { IframeRatio } from '../iframe';
import { RichText, defaultRenderFn } from '../rich-text';
import {
  TextMediaProps as TextMediaSchemaProps,
  TextMediaVideo as IVideo,
  TextMediaImage as IImage,
  TextMediaLazyImage as ILightboxImage,
  Media as IMedia,
  FullWidthMedia as TFullWidthMedia,
  Caption as TCaption,
} from './typing';

export interface RenderFunctions {
  renderText?: typeof defaultRenderFn;
}

export type TextMediaProps = TextMediaSchemaProps & RenderFunctions;

const figureClassName = (full: TFullWidthMedia) =>
  classnames('text-media__media', {
    'text-media__media--full': full,
  });
const Figure: FunctionComponent<
  PropsWithChildren<{
    full?: TFullWidthMedia;
    caption?: TCaption;
  }>
> = ({ full, caption, children }) => (
  <figure className={figureClassName(full)}>
    {children}
    {caption ? (
      <figcaption className="text-media__caption">{caption}</figcaption>
    ) : null}
  </figure>
);

const MediaVideo: FunctionComponent<IVideo> = ({ full, caption, video }) => (
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
const MediaImage: FunctionComponent<IImage> = ({ full, caption, image }) => (
  <Figure full={full} caption={caption}>
    <Picture {...image} />
  </Figure>
);
const MediaLightboxImage: FunctionComponent<ILightboxImage> = ({
  full,
  caption,
  lightboxImage,
}) => (
  <LightboxImage
    {...lightboxImage}
    className={figureClassName(full)}
    caption={lightboxImage.caption || caption}
    captionClassName="text-media__caption"
  />
);

const isVideo = (media: IVideo | IImage | ILightboxImage): media is IVideo =>
  'video' in media;
const isImage = (media: IVideo | IImage | ILightboxImage): media is IImage =>
  'image' in media;
const isLightboxImage = (
  media: IVideo | IImage | ILightboxImage
): media is ILightboxImage => 'lightboxImage' in media;

const Media: FunctionComponent<{ media: IMedia }> = ({ media }) =>
  media.length ? (
    <div className="text-media__gallery">
      {media.map((m, i) =>
        isVideo(m) ? (
          <MediaVideo {...m} key={i} />
        ) : isImage(m) ? (
          <MediaImage {...m} key={i} />
        ) : isLightboxImage(m) ? (
          <MediaLightboxImage {...m} key={i} />
        ) : null
      )}
    </div>
  ) : null;

export const TextMediaComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TextMediaProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    text = '',
    media = [],
    mediaAlignment = 'above-center',
    renderText = defaultRenderFn,
    className,
    component,
    ...props
  },
  ref
) => (
  <div
    className={classnames(
      'text-media',
      mediaAlignment && {
        'text-media--above': mediaAlignment.startsWith('above'),
        'text-media--beside': mediaAlignment.startsWith('beside'),
        'text-media--intext':
          mediaAlignment.startsWith('intext') ||
          mediaAlignment.startsWith('beside'),
        'text-media--below': mediaAlignment.startsWith('below'),
        'text-media--left': mediaAlignment.endsWith('left'),
        'text-media--center': mediaAlignment.endsWith('center'),
        'text-media--right': mediaAlignment.endsWith('right'),
      },
      className
    )}
    ks-component={component}
    ref={ref}
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

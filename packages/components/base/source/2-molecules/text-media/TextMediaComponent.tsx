import { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { renderFn } from '@kickstartds/core/core';
import { Picture } from '../../1-atoms/image/picture';
import { LightboxLazyImage } from '../../1-atoms/image/lightbox-image';
import { IframeRatio } from '../../1-atoms/iframe';
import { RichText, defaultRenderFn } from '../../1-atoms/rich-text';
import {
  TextMediaProps,
  Video as IVideo,
  Picture as IPicture,
  LazyLightboxImage as ILightboxImage,
} from './TextMediaProps';
import './text-media.scss';

export interface RenderFunctions {
  renderText?: renderFn;
}

type TMedia = Omit<TextMediaProps, 'text' | 'mediaAlignment'>;

const Video = ({ iframe, src, title, width, height }: IVideo) =>
  iframe ? (
    <IframeRatio
      {...{
        src,
        title,
        width,
        height,
      }}
    />
  ) : (
    <>
      <video controls className="lazyload" title={title} data-src={src}></video>
      <noscript>
        <video controls title={title} src={src}></video>
      </noscript>
    </>
  );

const Media = ({ media }: TMedia) =>
  media ? (
    <div className="text-media__gallery">
      {media.map((m, i) => (
        <div
          className={classnames('text-media__media', {
            'text-media__media--full': m.full,
          })}
          key={i}
        >
          {(m.video as IVideo)?.src ? (
            <Video {...(m.video as IVideo)} />
          ) : (m.image as IPicture)?.src ? (
            <Picture {...(m.image as IPicture)} />
          ) : (m.lightboxImage as ILightboxImage)?.image ? (
            <LightboxLazyImage {...(m.lightboxImage as ILightboxImage)} />
          ) : (
            ''
          )}
        </div>
      ))}
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

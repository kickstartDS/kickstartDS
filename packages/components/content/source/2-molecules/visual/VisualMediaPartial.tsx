import { FunctionComponent, useContext } from 'react';
import classnames from 'classnames';
import { Picture } from '@kickstartds/base/picture';
import { SlideContext } from '@kickstartds/base/slider';
import { MediaWrapper, Inbox } from './VisualProps';

interface IMedia extends MediaWrapper {
  inbox?: Inbox;
  overlay?: boolean;
}

const Image: FunctionComponent<IMedia> = ({ image = {} }) => {
  const { srcMobile, srcTablet, srcDesktop, indent, alt, src } = image;
  const slide = useContext(SlideContext);
  return (
    <picture
      className={classnames(
        'c-visual__image',
        indent && indent !== 'none' && `c-visual__image--indent-${indent}`
      )}
    >
      {slide && !slide.first ? (
        <>
          <source media="(min-width: 950px)" data-srcset={srcDesktop} />
          <source media="(min-width: 600px)" data-srcset={srcTablet} />
          <source data-srcset={srcMobile} />
          <Picture
            src={src || srcMobile}
            noscript={false}
            alt={alt}
            itemProp="image"
          />
        </>
      ) : (
        <>
          <source media="(min-width: 950px)" srcSet={srcDesktop} />
          <source media="(min-width: 600px)" srcSet={srcTablet} />
          <source srcSet={srcMobile} />
          <Picture
            src={src || srcMobile}
            lazy={false}
            alt={alt}
            itemProp="image"
          />
        </>
      )}
    </picture>
  );
};

const Video: FunctionComponent<IMedia> = ({ video = {} }) => {
  const { srcMobile, srcTablet, srcDesktop } = video;
  return (
    <video
      className="c-visual__video"
      muted
      loop
      autoPlay
      playsInline
      data-object-fit
    >
      <source media="(min-width: 950px)" src={srcDesktop} type="video/mp4" />
      <source media="(min-width: 600px)" src={srcTablet} type="video/mp4" />
      <source src={srcMobile} type="video/mp4" />
    </video>
  );
};

export const VisualMediaPartial: FunctionComponent<IMedia> = (props) => (
  <div
    className={classnames(
      'c-visual__media',
      props.inbox && 'c-visual__media--inbox'
    )}
  >
    {props.mode === 'image' && props.image && <Image {...props} />}
    {props.mode === 'video' && props.video && <Video {...props} />}
    {props.overlay && <div className="c-visual__overlay"></div>}
  </div>
);

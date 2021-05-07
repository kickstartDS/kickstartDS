import { FunctionComponent, useContext } from 'react';
import classnames from 'classnames';
import { Picture } from '@kickstartds/base/lib/picture';
import { SlideContext } from '@kickstartds/base/lib/slider';
import { MediaWrapper, Inbox } from './VisualProps';

// TODO readd: alt-text / altText
interface IMedia extends MediaWrapper {
  inbox?: Inbox;
  overlay?: boolean;
}

const Image: FunctionComponent<IMedia> = ({ image = {}, inbox }) => {
  const { srcMobile, srcTablet, srcDesktop, indent } = image;
  const slide = useContext(SlideContext);
  return (
    <picture
      className={classnames(
        'c-visual__image',
        indent !== 'none' && `c-visual__image--indent-${indent}`,
        { 'c-visual__image--inbox': inbox }
      )}
    >
      {slide && !slide.first ? (
        <>
          <source media="(min-width: 950px)" data-srcset={srcDesktop} />
          <source media="(min-width: 600px)" data-srcset={srcTablet} />
          <source data-srcset={srcMobile} />
          <Picture
            src={srcMobile}
            objectFit="cover"
            noscript={false}
            alt="TODO readd"
            itemProp="image"
          />
        </>
      ) : (
        <>
          <source media="(min-width: 950px)" srcSet={srcDesktop} />
          <source media="(min-width: 600px)" srcSet={srcTablet} />
          <source srcSet={srcMobile} />
          <Picture
            src={srcMobile}
            lazy={false}
            objectFit="cover"
            alt="TODO readd"
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
  <div className="c-visual__media">
    {props.mode === 'image' && props.image && <Image {...props} />}
    {props.mode === 'video' && props.video && <Video {...props} />}
    {props.overlay && <div className="c-visual__overlay"></div>}
  </div>
);

import { FunctionComponent, useContext } from 'react';
import classnames from 'classnames';
import { Picture } from '@kickstartds/base/lib/picture';
import { SlideContext } from '@kickstartds/base/lib/slider';
import { MediaWrapper, Inbox } from './VisualProps';

// TODO readd: autobuffer, autoplay, playsinline on <video> tag, wasn't allowed according to TypeScript typings
// TODO readd: alt-text / altText
interface IMedia extends MediaWrapper {
  inbox?: Inbox;
}

const Image: FunctionComponent<IMedia> = ({ image = {}, inbox }) => {
  const { srcMobile, srcTablet, srcDesktop, indent } = image;
  const slide = useContext(SlideContext);
  return (
    <picture
      className={classnames(
        'visual__image',
        indent !== 'none' && `visual__image--indent-${indent}`,
        { 'visual__image--inbox': inbox }
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
    <video className="visual__video" muted loop data-object-fit>
      <source media="(min-width: 950px)" src={srcDesktop} type="video/mp4" />
      <source media="(min-width: 600px)" src={srcTablet} type="video/mp4" />
      <source src={srcMobile} type="video/mp4" />
    </video>
  );
};

export const VisualMediaPartial: FunctionComponent<IMedia> = (props) => (
  <>
    {props.mode === 'image' && props.image && <Image {...props} />}
    {props.mode === 'video' && props.video && <Video {...props} />}
  </>
);

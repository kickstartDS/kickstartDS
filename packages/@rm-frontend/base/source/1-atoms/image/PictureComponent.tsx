// inspired by https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-image/src/components/picture.tsx

import {
  FunctionComponent,
  ForwardRefRenderFunction,
  forwardRef,
  createContext,
  Ref,
  useContext,
} from 'react';
import classnames from 'classnames';
import { PictureProps } from './PictureProps';

type ImageProps = PictureProps & {
  imgRef?: Ref<HTMLImageElement>;
};

const Image: FunctionComponent<ImageProps> = ({
  className,
  src,
  srcSet,
  lazy = true,
  objectFit,
  imgRef,
  noscript = true,
  ...props
}) => (
  <>
    <img
      {...props}
      className={classnames(className, { lazyload: lazy })}
      src={!lazy ? src : undefined}
      data-src={lazy ? src : undefined}
      srcSet={!lazy ? srcSet : undefined}
      data-srcset={lazy ? srcSet : undefined}
      data-object-fit={objectFit}
      ref={imgRef}
    />
    {lazy && noscript && (
      <noscript>
        <img {...props} src={src} srcSet={srcSet} className={className} />
      </noscript>
    )}
  </>
);

const PictureComponent: ForwardRefRenderFunction<
  HTMLImageElement,
  PictureProps
> = ({ sources = [], lazy = true, pictureClassName, ...props }, ref) => {
  const fallbackImage = <Image {...props} lazy={lazy} imgRef={ref} />;

  return sources.length ? (
    <picture className={pictureClassName}>
      {sources.map(({ media, srcSet, type }) => (
        <source
          key={`${media}-${type}-${srcSet}`}
          type={type}
          media={media}
          srcSet={!lazy ? srcSet : undefined}
          data-srcset={lazy ? srcSet : undefined}
        />
      ))}
      {fallbackImage}
    </picture>
  ) : (
    fallbackImage
  );
};

export const PictureContextDefault = forwardRef(PictureComponent);
export const PictureContext = createContext(PictureContextDefault);
export const Picture: typeof PictureContextDefault = forwardRef(
  (props, ref) => {
    const Component = useContext(PictureContext);
    return <Component {...props} ref={ref} />;
  }
);

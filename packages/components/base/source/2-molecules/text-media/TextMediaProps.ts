/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Copy text for the element
 */
export type TextContent = string;
/**
 * In relation to the text content
 */
export type MediaAlignment =
  | 'above-left'
  | 'above-center'
  | 'above-right'
  | 'beside-left'
  | 'beside-right'
  | 'intext-left'
  | 'intext-right'
  | 'below-left'
  | 'below-center'
  | 'below-right';
/**
 * Url (mp4) for the video to display
 */
export type Source = string;
/**
 * Use an iframe embed
 */
export type EmbeddedIframe = boolean;
/**
 * Title to use for the video
 */
export type VideoTitle = string;
/**
 * Width of the video
 */
export type Width = number;
/**
 * Height of the video
 */
export type Height = number;
/**
 * Display media item over full width
 */
export type FullWidthMedia = boolean;
/**
 * Picture source
 */
export type Source1 = string;
/**
 * Use a srcSet to display picture
 */
export type PictureSourceset = string;
/**
 * Alt text to display for picture
 */
export type AltText = string;
/**
 * Width of the picture
 */
export type Width1 = number;
/**
 * Height of the picture
 */
export type Height1 = number;
/**
 * Add additional css classes that should be applied to the button
 */
export type AdditionalClasses = string;
/**
 * Add id attribute to the image
 */
export type Id = string;
/**
 * Define an itemprop attribute for the picture
 */
export type ItempropAttribute = string;
/**
 * Define a style attribute for the picture
 */
export type StyleAttribute = string;
/**
 * Select a value for the picture object fit
 */
export type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
/**
 * Render noscript fallback
 */
export type Noscript = boolean;
/**
 * Load the picture lazily
 */
export type Lazy = boolean;
/**
 * Use a srcSet to display picture
 */
export type PictureSourceset1 = string;
/**
 * TODO MEDIA DESCRIPTION
 */
export type TODOMEDIATITLE = string;
/**
 * TODO TYPE DESCRIPTION
 */
export type TODOTYPETITLE = string;
/**
 * Additional sources. This will result in a `picture`-Element
 */
export type Sources = {
  srcSet?: PictureSourceset1;
  media?: TODOMEDIATITLE;
  type?: TODOTYPETITLE;
  [k: string]: unknown;
}[];
/**
 * Set additional class(es) to the picture
 */
export type ClassAttribute = string;
/**
 * Display media item over full width
 */
export type FullWidthMedia1 = boolean;
/**
 * Thumbnail Source
 */
export type ThumbnailSource = string;
/**
 * Lightbox Image Source
 */
export type LightboxImageSource = string;
/**
 * Width
 */
export type Width2 = number;
/**
 * height
 */
export type Height2 = number;
/**
 * Hover Zoom Icon
 */
export type HoverZoomIcon = boolean;
/**
 * Caption
 */
export type Caption = string;
/**
 * Hide caption visually
 */
export type HideCaptionVisually = boolean;
/**
 * Gallery identifier
 */
export type GalleryIdentifier = string;
/**
 * ID
 */
export type ID = string;
/**
 * Additional Image Class
 */
export type AdditionalImageClass = string;
/**
 * Display media item over full width
 */
export type FullWidthMedia2 = boolean;
/**
 * Collection of media items to display
 */
export type Media = (Video | Image | LazyImage)[];

/**
 * Component to display copy text, including media
 */
export interface TextMediaProps {
  text: TextContent;
  mediaAlignment: MediaAlignment;
  media?: Media;
}
export interface Video {
  video?: Video1;
  full?: FullWidthMedia;
  [k: string]: unknown;
}
/**
 * Video item to display
 */
export interface Video1 {
  src: Source;
  iframe?: EmbeddedIframe;
  title?: VideoTitle;
  width: Width;
  height: Height;
  [k: string]: unknown;
}
export interface Image {
  image?: Picture;
  full?: FullWidthMedia1;
  [k: string]: unknown;
}
/**
 * Base component to display a picture
 */
export interface Picture {
  src?: Source1;
  srcSet?: PictureSourceset;
  alt?: AltText;
  width?: Width1;
  height?: Height1;
  className?: AdditionalClasses;
  id?: Id;
  itemProp?: ItempropAttribute;
  style?: StyleAttribute;
  objectFit?: ObjectFit;
  noscript?: Noscript;
  lazy?: Lazy;
  sources?: Sources;
  pictureClassName?: ClassAttribute;
  [k: string]: unknown;
}
export interface LazyImage {
  lightboxImage?: LazyLightboxImage;
  full?: FullWidthMedia2;
  [k: string]: unknown;
}
/**
 * Lazy Lightbox Image
 */
export interface LazyLightboxImage {
  thumb?: ThumbnailSource;
  image?: LightboxImageSource;
  width?: Width2;
  height?: Height2;
  zoomIcon?: HoverZoomIcon;
  caption?: Caption;
  hideCaption?: HideCaptionVisually;
  gallery?: GalleryIdentifier;
  id?: ID;
  class?: AdditionalImageClass;
  [k: string]: unknown;
}

/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Picture source
 */
export type Source = string;
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
export type Width = number;
/**
 * Height of the picture
 */
export type Height = number;
/**
 * Add additional css classes that should be applied to the button
 */
export type AdditionalClasses = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;
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
}[];
/**
 * Set additional class(es) to the picture
 */
export type ClassAttribute = string;
/**
 * Name, company name, etc.
 */
export type Title = string;
/**
 * Position, profession, department, location, etc.
 */
export type Subtitle = string;
/**
 * Open link in new Tab
 */
export type OpenLinkInNewTab = boolean;
export type CopyText = string;
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute1 = string;

/**
 * Component to show contact information
 */
export interface ContactProps {
  image?: Picture;
  title?: Title;
  subtitle?: Subtitle;
  links?: {
    icon?: string;
    label?: string;
    href?: string;
    newTab?: OpenLinkInNewTab;
  }[];
  copy?: CopyText;
  className?: Class;
  component?: KsComponentAttribute1;
}
/**
 * Base component to display a picture
 */
export interface Picture {
  src?: Source;
  srcSet?: PictureSourceset;
  alt?: AltText;
  width?: Width;
  height?: Height;
  className?: AdditionalClasses;
  component?: KsComponentAttribute;
  id?: Id;
  itemProp?: ItempropAttribute;
  style?: StyleAttribute;
  noscript?: Noscript;
  lazy?: Lazy;
  sources?: Sources;
  pictureClassName?: ClassAttribute;
}

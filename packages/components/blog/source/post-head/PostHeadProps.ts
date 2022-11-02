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
 * Width of the picture
 */
export type Width = number;
/**
 * Height of the picture
 */
export type Height = number;
/**
 * Use a srcSet to display picture
 */
export type PictureSourceset = string;
/**
 * Alt text to display for picture
 */
export type AltText = string;
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
  [k: string]: unknown;
}[];
/**
 * Set additional class(es) to the picture
 */
export type ClassAttribute = string;
/**
 * Choose an horizontal alignment for the image.
 */
export type Alignment = 'left' | 'center' | 'right';
/**
 * Date for news item
 */
export type Date = string;
/**
 * Text content for the headline
 */
export type Text = string;
/**
 * Select the headline level to use, or p alternatively
 */
export type Level = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
/**
 * Add additional spacing to the bottom of the headline
 */
export type BottomSpacing = 'minimum' | 'small' | 'default' | 'large';
/**
 * Select the headline style to use
 */
export type Style = 'none' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
/**
 * Choose an alignment for the headline
 */
export type Alignment1 = 'left' | 'center' | 'right';
/**
 * Text content for the optional subheadline
 */
export type Subheadline = string;
/**
 * Add additional css classes that should be applied to the headline
 */
export type AdditionalClasses1 = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute1 = string;
/**
 * Text to display inside tag label
 */
export type Label = string;
/**
 * Choose a size to scale the tag label up or down
 */
export type Size = 's' | 'm' | 'l';
/**
 * Set optional href to link the tag
 */
export type LinkTarget = string;
/**
 * Choose whether the element is removable or not
 */
export type Removable = boolean;
/**
 * Add additional css classes that should be applied to the label
 */
export type AdditionalClasses2 = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute2 = string;
export type Categories = TagLabel[];
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute3 = string;

/**
 * Post Head
 */
export interface PostHeadProps {
  image?: Picture;
  imageAlignment?: Alignment;
  date?: Date;
  headline?: Headline;
  categories?: Categories;
  className?: Class;
  component?: KsComponentAttribute3;
  [k: string]: unknown;
}
/**
 * Base component to display a picture
 */
export interface Picture {
  src?: Source;
  width?: Width;
  height?: Height;
  srcSet?: PictureSourceset;
  alt?: AltText;
  className?: AdditionalClasses;
  component?: KsComponentAttribute;
  id?: Id;
  itemProp?: ItempropAttribute;
  style?: StyleAttribute;
  noscript?: Noscript;
  lazy?: Lazy;
  sources?: Sources;
  pictureClassName?: ClassAttribute;
  [k: string]: unknown;
}
/**
 * Headline
 */
export interface Headline {
  content: Text;
  level?: Level;
  spaceAfter?: BottomSpacing;
  styleAs?: Style;
  align?: Alignment1;
  subheadline?: Subheadline;
  className?: AdditionalClasses1;
  component?: KsComponentAttribute1;
  [k: string]: unknown;
}
/**
 * Component to render a pill / tag / label
 */
export interface TagLabel {
  label: Label;
  size?: Size;
  link?: LinkTarget;
  removable?: Removable;
  className?: AdditionalClasses2;
  component?: KsComponentAttribute2;
}

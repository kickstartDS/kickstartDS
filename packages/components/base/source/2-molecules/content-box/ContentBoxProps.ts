/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `npm run schema2ts` to regenerate this file.
 */

/**
 * Choose one of the set ratios, all ratios except `none` stretch the image to 100% width
 */
export type ImageRatio = 'none' | '4:3' | '16:9' | '1:1';
/**
 * Choose an alignment for the box. For the image it only applies for a `ratio` value of `none`
 */
export type Alignment = 'left' | 'center' | 'right';
/**
 * Select an image to display inside the content box, at the top
 */
export type ImageSource = string;
/**
 * Topic for the content box. Displayed before the text, in bold
 */
export type Topic = string;
/**
 * Text for the content box
 */
export type TextContent = string;
/**
 * Toggles visibility of the link
 */
export type DisplayLink = boolean;
/**
 * Text used on button
 */
export type Label = string;
/**
 * Choose one of the styles from the list
 */
export type ButtonStyle =
  | 'solid'
  | 'solid-inverted'
  | 'clear'
  | 'clear-inverted'
  | 'outline'
  | 'outline-inverted';
/**
 * Choose a size between small, medium and large
 */
export type ButtonSize = 'small' | 'medium' | 'large';
/**
 * Add additional css classes that should be applied to the button
 */
export type AdditionalClasses = string;
export type IconIdentifier = string;
export type AriaRole = string;
export type AdditionalClass = string;
/**
 * Display icon before the button text
 */
export type IconBeforeButton = boolean;
/**
 * Display icon after the button text
 */
export type IconAfterButton = boolean;
/**
 * Overwrite the data-component to use for rendering
 */
export type DataComponentAttribute = string;
/**
 * Add fill animation on hover
 */
export type FillAnimation = boolean;
/**
 * Add icon animation on hover
 */
export type IconAnimation = boolean;
/**
 * Link used for button
 */
export type ButtonHref = string;
/**
 * Open link in new Tab
 */
export type OpenLinkInNewTab = boolean;

/**
 * Component to display content in a condensed, boxed form
 */
export interface ContentBoxProps {
  ratio: ImageRatio;
  alignement: Alignment;
  image?: ImageSource;
  topic?: Topic;
  text?: TextContent;
  link?: Link;
}
/**
 * Content box link configuration
 */
export interface Link {
  enabled?: DisplayLink;
  label: Label;
  variant: ButtonStyle;
  size: ButtonSize;
  className?: AdditionalClasses;
  icon?: Icon;
  iconBefore?: IconBeforeButton;
  iconAfter?: IconAfterButton;
  dataComponent?: DataComponentAttribute;
  fillAnimation?: FillAnimation;
  iconAnimation?: IconAnimation;
  href: ButtonHref;
  newTab?: OpenLinkInNewTab;
}
/**
 * Icon
 */
export interface Icon {
  icon?: IconIdentifier;
  role?: AriaRole;
  className?: AdditionalClass;
  [k: string]: unknown;
}

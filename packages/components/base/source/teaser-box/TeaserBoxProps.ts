/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Topic for the teaser box. Displayed before the text, in bold
 */
export type Topic = string;
/**
 * Text for the teaser box
 */
export type TextContent = string;
export type Inverted = boolean;
/**
 * Text used on button
 */
export type Label = string;
/**
 * Choose one of the styles from the list
 */
export type ButtonStyle = 'solid' | 'clear' | 'outline';
export type Inverted1 = boolean;
/**
 * Choose a size between small, medium and large
 */
export type ButtonSize = 'small' | 'medium' | 'large';
/**
 * Link used for button
 */
export type ButtonHref = string;
export type IconIdentifier = string;
export type AriaRole = string;
export type AdditionalClass = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;
export type IconIdentifier1 = string;
export type AriaRole1 = string;
export type AdditionalClass1 = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute1 = string;
/**
 * Add fill animation on hover
 */
export type FillAnimation = boolean;
/**
 * Add icon animation on hover
 */
export type IconAnimation = boolean;
/**
 * Select the type attribute for the button
 */
export type TypeAttribute = 'button' | 'submit' | 'reset';
/**
 * Define a value attribute for the button
 */
export type ValueAttribute = string;
/**
 * Define a name attribute for the button
 */
export type NameAttribute = string;
/**
 * Set the disabled attribute for the button
 */
export type DisabledAttribute = boolean;
/**
 * Open link in new Tab
 */
export type OpenLinkInNewTab = boolean;
/**
 * Add additional css classes that should be applied to the button
 */
export type AdditionalClasses = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute2 = string;
/**
 * Hides the link. The box as a whole keeps being clickable
 */
export type HideLink = boolean;
/**
 * Additional css classes attached to the box
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute3 = string;
/**
 * Select an image to display inside the teaser box, at the top
 */
export type ImageSource = string;
/**
 * Choose the ratio used to crop and display the image
 */
export type ImageRatio = '4:3' | '16:9' | '1:1';
/**
 * Optionally add inner spacing to the displayed image
 */
export type ImageSpacing = boolean;

/**
 * Component to tease external content
 */
export interface TeaserBoxProps {
  topic?: Topic;
  text?: TextContent;
  inverted?: Inverted;
  link?: Button;
  className?: Class;
  component?: KsComponentAttribute3;
  image?: ImageSource;
  ratio: ImageRatio;
  imageSpacing?: ImageSpacing;
}
/**
 * Component to display links and call-to-actions
 */
export interface Button {
  label?: Label;
  variant?: ButtonStyle;
  inverted?: Inverted1;
  size?: ButtonSize;
  href?: ButtonHref;
  iconBefore?: IconBeforeButton;
  iconAfter?: IconAfterButton;
  fillAnimation?: FillAnimation;
  iconAnimation?: IconAnimation;
  type?: TypeAttribute;
  value?: ValueAttribute;
  name?: NameAttribute;
  disabled?: DisabledAttribute;
  newTab?: OpenLinkInNewTab;
  className?: AdditionalClasses;
  component?: KsComponentAttribute2;
  hidden?: HideLink;
}
/**
 * Icon identifier for icon before the button text
 */
export interface IconBeforeButton {
  icon: IconIdentifier;
  role?: AriaRole;
  className?: AdditionalClass;
  component?: KsComponentAttribute;
  [k: string]: unknown;
}
/**
 * Icon identifier for icon after the button text
 */
export interface IconAfterButton {
  icon: IconIdentifier1;
  role?: AriaRole1;
  className?: AdditionalClass1;
  component?: KsComponentAttribute1;
  [k: string]: unknown;
}

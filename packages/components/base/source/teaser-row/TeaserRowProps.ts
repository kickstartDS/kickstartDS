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
 * Hides the link. The box as a whole keeps being clickable
 */
export type HideLink = boolean;
/**
 * Additional css classes attached to the box
 */
export type Class = string;

/**
 * Component to tease external content
 */
export interface TeaserRowProps {
  topic?: Topic;
  text?: TextContent;
  inverted?: Inverted;
  link?: Button;
  className?: Class;
}
/**
 * Component to display links and call-to-actions
 */
export interface Button {
  label: Label;
  variant: ButtonStyle;
  inverted?: Inverted1;
  size: ButtonSize;
  href?: ButtonHref;
  className?: AdditionalClasses;
  icon?: Icon;
  iconBefore?: IconBeforeButton;
  iconAfter?: IconAfterButton;
  dataComponent?: DataComponentAttribute;
  fillAnimation?: FillAnimation;
  iconAnimation?: IconAnimation;
  type?: TypeAttribute;
  value?: ValueAttribute;
  name?: NameAttribute;
  disabled?: DisabledAttribute;
  newTab?: OpenLinkInNewTab;
  hidden?: HideLink;
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
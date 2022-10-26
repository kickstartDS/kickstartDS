/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Text used on button
 */
export type Label = string;
/**
 * Choose one of the styles from the list
 */
export type ButtonStyle = 'solid' | 'clear' | 'outline';
export type Inverted = boolean;
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
export type IconIdentifier1 = string;
export type AriaRole1 = string;
export type AdditionalClass1 = string;
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
 * Overwrite the data-component to use for rendering
 */
export type DataComponentAttribute = string;

/**
 * Component to display links and call-to-actions
 */
export interface ButtonProps {
  label?: Label;
  variant?: ButtonStyle;
  inverted?: Inverted;
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
  dataComponent?: DataComponentAttribute;
}
/**
 * Icon identifier for icon before the button text
 */
export interface IconBeforeButton {
  icon: IconIdentifier;
  role?: AriaRole;
  className?: AdditionalClass;
  [k: string]: unknown;
}
/**
 * Icon identifier for icon after the button text
 */
export interface IconAfterButton {
  icon: IconIdentifier1;
  role?: AriaRole1;
  className?: AdditionalClass1;
  [k: string]: unknown;
}

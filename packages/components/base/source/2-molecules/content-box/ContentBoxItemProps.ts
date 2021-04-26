/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `npm run schema2ts` to regenerate this file.
 */

export type ImageAlignment = 'left' | 'center' | 'right';
/**
 * Text used on button
 */
export type Label = string;
export type ButtonStyle =
  | 'solid'
  | 'solid-inverted'
  | 'clear'
  | 'clear-inverted'
  | 'outline'
  | 'outline-inverted';
export type ButtonSize = 'small' | 'medium' | 'large';
export type AdditionalClasses = string;
export type IconIdentifier = string;
export type AriaRole = string;
export type AdditionalClass = string;
/**
 * Display Button icon before text
 */
export type ButtonIconBefore = boolean;
/**
 * Display Button icon after text
 */
export type ButtonIconAfter = boolean;
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

export interface ContentBoxItemProps {
  ratio?: 'none' | '4:3' | '16:9' | '1:1';
  alignement?: ImageAlignment;
  image?: string;
  topic?: string;
  text?: string;
  link?: LinkButton;
  [k: string]: unknown;
}
/**
 * link-button
 */
export interface LinkButton {
  label?: Label;
  variant: ButtonStyle;
  size?: ButtonSize;
  className?: AdditionalClasses;
  icon?: Icon;
  iconBefore?: ButtonIconBefore;
  iconAfter?: ButtonIconAfter;
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

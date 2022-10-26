/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Text content for the headline
 */
export type Text = string;
/**
 * Select the headline level to use, or p alternatively
 */
export type Level = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
/**
 * Select the headline style to use
 */
export type Style = 'none' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
/**
 * Choose an alignment for the headline
 */
export type Alignment = 'left' | 'center' | 'right';
/**
 * Text content for the optional subheadline
 */
export type Subheadline = string;
/**
 * Add additional spacing to the bottom of the headline
 */
export type BottomSpacing = 'none' | 'small' | 'large';
/**
 * Set the headline as a page header, triggering special css treatment
 */
export type PageHeader = boolean;
/**
 * Add additional css classes that should be applied to the headline
 */
export type AdditionalClasses = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;
/**
 * Open link in new Tab
 */
export type OpenLinkInNewTab = boolean;
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute1 = string;

/**
 * Post Share Bar
 */
export interface PostShareBarProps {
  headline?: Headline;
  links?: ShareLink[];
  className?: Class;
  component?: KsComponentAttribute1;
  [k: string]: unknown;
}
/**
 * Headline
 */
export interface Headline {
  content: Text;
  level?: Level;
  styleAs?: Style;
  align?: Alignment;
  subheadline?: Subheadline;
  spaceAfter?: BottomSpacing;
  pageHeader?: PageHeader;
  className?: AdditionalClasses;
  component?: KsComponentAttribute;
  [k: string]: unknown;
}
export interface ShareLink {
  href?: string;
  icon?: string;
  title?: string;
  newTab?: OpenLinkInNewTab;
  [k: string]: unknown;
}

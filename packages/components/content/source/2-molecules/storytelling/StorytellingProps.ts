/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `npm run schema2ts` to regenerate this file.
 */

export type BackgroundImage = string;
export type BackgroundColor = string;
export type FullSizeImage = boolean;
export type Image1 = string;
export type ImageAspectRatio = '4:3' | '3:2' | '16:9' | '1:1' | 'none';
export type ImageVerticalAlignment =
  | 'center'
  | 'top'
  | 'top-edge'
  | 'bottom'
  | 'bottom-edge';
export type ImageHorizontalAlignment =
  | 'center'
  | 'left'
  | 'left-edge'
  | 'right'
  | 'right-edge';
export type MobileImageAfterText = boolean;
export type DesktopImageAfterText = boolean;
/**
 * Headline Level
 */
export type HeadlineLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
/**
 * Text Align
 */
export type TextAlign = 'left' | 'center' | 'right';
/**
 * Headline Text
 */
export type HeadlineText = string;
/**
 * Subheadline Text
 */
export type SubheadlineText = string;
/**
 * Bottom Spacing
 */
export type BottomSpacing = 'none' | 'small' | 'large';
/**
 * Page Header
 */
export type PageHeader = boolean;
export type Text = string;
export type TextAlign1 = 'left' | 'center';
export type TextColor = string;
export type BoxVerticalAlignment = 'center' | 'top' | 'bottom';
export type BoxHorizontalAlignment = 'center' | 'left' | 'right';
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

/**
 * Storytelling
 */
export interface StorytellingProps {
  backgroundImage?: BackgroundImage;
  backgroundColor?: BackgroundColor;
  full?: FullSizeImage;
  image: Image;
  box: Box;
  [k: string]: unknown;
}
export interface Image {
  source?: Image1;
  ratio?: ImageAspectRatio;
  vAlign?: ImageVerticalAlignment;
  hAlign?: ImageHorizontalAlignment;
  order?: Order;
  [k: string]: unknown;
}
export interface Order {
  mobileImageLast?: MobileImageAfterText;
  desktopImageLast?: DesktopImageAfterText;
  [k: string]: unknown;
}
export interface Box {
  headline?: Headline;
  text?: Text;
  textAlign?: TextAlign1;
  textColor?: TextColor;
  vAlign?: BoxVerticalAlignment;
  hAlign?: BoxHorizontalAlignment;
  link?: LinkButton;
  [k: string]: unknown;
}
/**
 * Headline
 */
export interface Headline {
  level: HeadlineLevel;
  align?: TextAlign;
  content: HeadlineText;
  subheadline?: SubheadlineText;
  spaceAfter?: BottomSpacing;
  pageHeader?: PageHeader;
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

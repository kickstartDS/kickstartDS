/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Background image for the whole element
 */
export type BackgroundImage = string;
/**
 * Background color for the whole element
 */
export type BackgroundColor = string;
/**
 * Display a full sized version of the image
 */
export type FullSizeImage = boolean;
/**
 * Image source to use
 */
export type ImageSource = string;
/**
 * Select an aspect ratio to use for cropping and displaying the image
 */
export type ImageAspectRatio = '4:3' | '3:2' | '16:9' | '1:1' | 'none';
/**
 * Select a vertical alignment for the image
 */
export type ImageVerticalAlignment =
  | 'center'
  | 'top'
  | 'top-edge'
  | 'bottom'
  | 'bottom-edge';
/**
 * Select a horizontal alignment for the image
 */
export type ImageHorizontalAlignment =
  | 'center'
  | 'left'
  | 'left-edge'
  | 'right'
  | 'right-edge';
/**
 * Switch to displaying the image after the text on mobile
 */
export type MobileImageAfterText = boolean;
/**
 * Switch to displaying the image after the text on desktop
 */
export type DesktopImageAfterText = boolean;
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
 * Text content for the headline
 */
export type Text = string;
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
 * Text content to display inside the element
 */
export type Text1 = string;
/**
 * Switch text alignment between left and center
 */
export type TextAlignment = 'left' | 'center';
/**
 * Overwrite the color to use for the text content
 */
export type TextColor = string;
/**
 * Select a vertical alignment for the box
 */
export type BoxVerticalAlignment = 'center' | 'top' | 'bottom';
/**
 * Select a horizontal alignment for the box
 */
export type BoxHorizontalAlignment = 'center' | 'left' | 'right';
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
 * Component to present rich combinations of text and media, best used sequentially
 */
export interface StorytellingProps {
  backgroundImage?: BackgroundImage;
  backgroundColor?: BackgroundColor;
  full?: FullSizeImage;
  image: Image;
  box: TextBox;
  [k: string]: unknown;
}
/**
 * Image displayed alongside the text content
 */
export interface Image {
  source?: ImageSource;
  ratio?: ImageAspectRatio;
  vAlign?: ImageVerticalAlignment;
  hAlign?: ImageHorizontalAlignment;
  order?: Order;
  [k: string]: unknown;
}
/**
 * Choose what comes first on mobile and desktop: image or text
 */
export interface Order {
  mobileImageLast?: MobileImageAfterText;
  desktopImageLast?: DesktopImageAfterText;
  [k: string]: unknown;
}
/**
 * Text content to display
 */
export interface TextBox {
  headline?: Headline;
  text?: Text1;
  textAlign?: TextAlignment;
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
  level: Level;
  styleAs?: Style;
  align: Alignment;
  content?: Text;
  subheadline?: Subheadline;
  spaceAfter: BottomSpacing;
  pageHeader?: PageHeader;
  [k: string]: unknown;
}
/**
 * link-button
 */
export interface LinkButton {
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

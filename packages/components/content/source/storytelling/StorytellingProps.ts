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
 * Add additional css classes that should be applied to the headline
 */
export type AdditionalClasses = string;
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
/**
 * Add additional css classes that should be applied to the button
 */
export type AdditionalClasses1 = string;
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
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
export type Inverted1 = boolean;

/**
 * Component to present rich combinations of text and media, best used sequentially
 */
export interface StorytellingProps {
  backgroundImage?: BackgroundImage;
  backgroundColor?: BackgroundColor;
  full?: FullSizeImage;
  image?: Image;
  box: TextBox;
  className?: Class;
  inverted?: Inverted1;
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
  link?: Button;
  [k: string]: unknown;
}
/**
 * Headline for the box
 */
export interface Headline {
  level: Level;
  styleAs?: Style;
  align: Alignment;
  content?: Text;
  subheadline?: Subheadline;
  spaceAfter: BottomSpacing;
  pageHeader?: PageHeader;
  className?: AdditionalClasses;
  [k: string]: unknown;
}
/**
 * Component to display links and call-to-actions
 */
export interface Button {
  label: Label;
  variant: ButtonStyle;
  inverted?: Inverted;
  size: ButtonSize;
  href?: ButtonHref;
  className?: AdditionalClasses1;
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
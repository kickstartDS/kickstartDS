/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

export type Height = 'small' | 'default' | 'fullImage' | 'fullScreen';
/**
 * Choose a media type between image, video and none
 */
export type MediaType = 'image' | 'video' | 'none';
/**
 * Background image source for small screens
 */
export type MobileImageSource = string;
/**
 * Background image source for medium screens
 */
export type TabletImageSource = string;
/**
 * Background image source for large screens
 */
export type DesktopImageSource = string;
/**
 * Override for img tag of picture element, if needed
 */
export type OptionalSource = string;
/**
 * Choose to indent the image horizontally on small screens
 */
export type ImageIndent = 'none' | 'left' | 'right';
/**
 * Alt text to display for picture
 */
export type AltText = string;
/**
 * Background video source for small screens
 */
export type MobileVideoSource = string;
/**
 * Background video source for medium screens
 */
export type TabletVideoSource = string;
/**
 * Background video source for large screens
 */
export type DesktopVideoSource = string;
/**
 * Enable grid layer
 */
export type GridLayer = boolean;
/**
 * Toggles visibility of the box
 */
export type DisplayBox = boolean;
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
 * Text box copy text
 */
export type Text1 = string;
/**
 * Toggles visibility of the link
 */
export type DisplayLink = boolean;
/**
 * Choose one of the styles from the list
 */
export type ButtonStyle = 'solid' | 'clear' | 'outline';
/**
 * Text used on button
 */
export type Label = string;
/**
 * Choose a size between small, medium and large
 */
export type ButtonSize = 'small' | 'medium' | 'large';
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
 * Link used for button
 */
export type ButtonHref = string;
/**
 * Open link in new Tab
 */
export type OpenLinkInNewTab = boolean;
export type Inverted = boolean;
/**
 * The text box is aligned inside the content grid
 */
export type Indent = boolean;
/**
 * Horizontal orientation of the box inside the keyvisual
 */
export type HorizontalOrientation = 'left' | 'center' | 'right';
/**
 * Vertical orientation of the box inside the keyvisual
 */
export type VerticalOrientation = 'top' | 'center' | 'bottom';
/**
 * Choose a style for the box
 */
export type StyleOfTheBox = 'solid' | 'transparent';
export type Inverted1 = boolean;
/**
 * Custom css background color
 */
export type CustomBackgroundColor = string;
/**
 * The text box is in front of the image on small screens
 */
export type Inbox = boolean;
/**
 * Show skip button
 */
export type SkipButton = boolean;
export type AdditionalClasses2 = string;

/**
 * visual
 */
export interface VisualProps {
  height?: Height;
  media?: MediaWrapper;
  overlay?: GridLayer;
  box?: TextBox;
  backgroundColor?: CustomBackgroundColor;
  inbox?: Inbox;
  skipButton?: SkipButton;
  className?: AdditionalClasses2;
}
/**
 * Wrapper for all media types
 */
export interface MediaWrapper {
  mode?: MediaType;
  image?: BackgroundImage;
  video?: BackgroundVideo;
}
/**
 * Sources of background images for different screen sizes
 */
export interface BackgroundImage {
  srcMobile: MobileImageSource;
  srcTablet: TabletImageSource;
  srcDesktop: DesktopImageSource;
  src?: OptionalSource;
  indent?: ImageIndent;
  alt?: AltText;
  [k: string]: unknown;
}
/**
 * Sources of background videos for different screen sizes
 */
export interface BackgroundVideo {
  srcMobile: MobileVideoSource;
  srcTablet: TabletVideoSource;
  srcDesktop: DesktopVideoSource;
  [k: string]: unknown;
}
/**
 * Content and style configuration for the text box
 */
export interface TextBox {
  enabled?: DisplayBox;
  headline?: Headline;
  text?: Text1;
  link?: Link;
  indent?: Indent;
  horizontal?: HorizontalOrientation;
  vertical?: VerticalOrientation;
  background?: StyleOfTheBox;
  inverted?: Inverted1;
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
 * Text box link configuration
 */
export interface Link {
  enabled?: DisplayLink;
  variant: ButtonStyle;
  label: Label;
  size: ButtonSize;
  className?: AdditionalClasses1;
  icon?: Icon;
  iconBefore?: IconBeforeButton;
  iconAfter?: IconAfterButton;
  dataComponent?: DataComponentAttribute;
  fillAnimation?: FillAnimation;
  iconAnimation?: IconAnimation;
  href: ButtonHref;
  newTab?: OpenLinkInNewTab;
  inverted?: Inverted;
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

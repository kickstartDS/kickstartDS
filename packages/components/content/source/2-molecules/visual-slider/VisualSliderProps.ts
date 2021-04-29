/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `npm run schema2ts` to regenerate this file.
 */

/**
 * Automatically move to next slide after 4 seconds without user interaction
 */
export type AutoPlay = boolean;
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
 * Choose to indent the image horizontally on small screens
 */
export type ImageIndent = 'none' | 'left' | 'right';
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
 * Text box headline
 */
export type Headline = string;
/**
 * Text box copy text
 */
export type Text = string;
/**
 * Toggles visibility of the link
 */
export type DisplayLink = boolean;
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
export type StyleOfTheBox = 'default' | 'light' | 'transparent';
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
export type AdditionalClasses1 = string;
/**
 * preview label
 */
export type SlidePreviewLabel = string;

/**
 * Visual Slider
 */
export interface VisualSliderProps {
  autoplay?: AutoPlay;
  slides: Visual[];
  [k: string]: unknown;
}
/**
 * visual
 */
export interface Visual {
  height?: Height;
  media?: MediaWrapper;
  overlay?: GridLayer;
  box?: TextBox;
  backgroundColor?: CustomBackgroundColor;
  inbox?: Inbox;
  skipButton?: SkipButton;
  className?: AdditionalClasses1;
  label?: SlidePreviewLabel;
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
  indent?: ImageIndent;
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
  text?: Text;
  link?: Link;
  indent?: Indent;
  horizontal?: HorizontalOrientation;
  vertical?: VerticalOrientation;
  background?: StyleOfTheBox;
}
/**
 * Text box link configuration
 */
export interface Link {
  enabled?: DisplayLink;
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

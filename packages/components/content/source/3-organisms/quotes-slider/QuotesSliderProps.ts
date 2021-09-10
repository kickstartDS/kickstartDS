/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Select an image to display inside the quote, to the left
 */
export type ImageSource = string;
/**
 * Copy text for the element
 */
export type TextContent = string;
/**
 * Optionally display the source for the quote
 */
export type Source = string;
/**
 * Optionally display a date for the quote
 */
export type Date = string;
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Additional css classes attached to the slider
 */
export type Class1 = string;

export interface QuotesSliderProps {
  slides?: Quote[];
  className?: Class1;
  [k: string]: unknown;
}
/**
 * Component to display a rich quote
 */
export interface Quote {
  image?: ImageSource;
  text: TextContent;
  source?: Source;
  date?: Date;
  className?: Class;
  [k: string]: unknown;
}

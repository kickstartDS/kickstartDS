/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

import type { PictureProps } from '@kickstartds/base/lib/picture/typing';
import type { PostMetaProps } from '@kickstartds/blog/lib/post-meta/typing';
import type { TagLabelProps } from '@kickstartds/base/lib/tag-label/typing';

/**
 * Link used for button
 */
export type ButtonHref = string;
/**
 * Text used on button
 */
export type Label = string;
/**
 * Title for news item
 */
export type Title = string;
/**
 * Bodytext for news item
 */
export type Bodytext = string;
export type Categories = TagLabelProps[];
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * Post Teaser
 */
export interface PostTeaserProps {
  image?: {
    src?: {
      [k: string]: unknown;
    };
    width?: {
      [k: string]: unknown;
    };
    height?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  } & PictureProps;
  /**
   * Referenced component PostMetaProps
   */
  meta?: PostMetaProps;
  link: Link;
  title?: Title;
  body?: Bodytext;
  categories?: Categories;
  className?: Class;
  component?: KsComponentAttribute;
}
/**
 * Link for news item
 */
export interface Link {
  href: ButtonHref;
  label: Label;
}

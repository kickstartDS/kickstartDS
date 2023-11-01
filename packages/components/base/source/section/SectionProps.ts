/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

import type { HeadlineProps } from '@kickstartds/base/lib/headline/typing';

/**
 * Width of section to use
 */
export type Width = 'narrow' | 'default' | 'wide' | 'max' | 'full';
/**
 * Width of headline to use
 */
export type HeadlineWidth = 'unset' | 'narrow' | 'default' | 'wide';
/**
 * Choose an alignment for the headline
 */
export type HeadlineAlignment = 'left' | 'center' | 'right';
/**
 * Width of content to use
 */
export type ContentWidth = 'unset' | 'narrow' | 'default' | 'wide';
/**
 * Choose an alignment for the content
 */
export type ContentAlignment = 'left' | 'center' | 'right';
/**
 * Size of gutter to use
 */
export type Gutter = 'large' | 'default' | 'small' | 'none';
/**
 * Layout mode used for section contents
 */
export type Mode = 'default' | 'tile' | 'list';
/**
 * Type of background
 */
export type Background = 'default' | 'accent' | 'bold';
/**
 * Whether to invert the section
 */
export type Inverted = boolean;
/**
 * Amount of spacing before the section
 */
export type SpaceBefore = 'default' | 'small' | 'none';
/**
 * Amount of spacing after the section
 */
export type SpaceAfter = 'default' | 'small' | 'none';
/**
 * Add additional css classes that should be applied to the section
 */
export type AdditionalClass = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

export interface SectionProps {
  width?: Width;
  headlineWidth?: HeadlineWidth;
  headlineAlign?: HeadlineAlignment;
  contentWidth?: ContentWidth;
  contentAlign?: ContentAlignment;
  gutter?: Gutter;
  mode?: Mode;
  background?: Background;
  inverted?: Inverted;
  spaceBefore?: SpaceBefore;
  spaceAfter?: SpaceAfter;
  headline?: {
    align?: string;
  } & HeadlineProps;
  className?: AdditionalClass;
  component?: KsComponentAttribute;
}

/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `npm run schema2ts` to regenerate this file.
 */

/**
 * Select the headline level to use, or p alternatively
 */
export type Level = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
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

export interface SectionProps {
  width?: 'full' | 'max' | 'wide' | 'default' | 'narrow';
  gutter?: 'large' | 'default' | 'small' | 'none';
  mode?: 'default' | 'tile' | 'list';
  background?: 'default' | 'accent' | 'dark';
  'space-before'?: 'default' | 'small' | 'none';
  'space-after'?: 'default' | 'small' | 'none';
  headline?: Headline;
  [k: string]: unknown;
}
/**
 * Headline
 */
export interface Headline {
  level: Level;
  align: Alignment;
  content: Text;
  subheadline?: Subheadline;
  spaceAfter: BottomSpacing;
  pageHeader?: PageHeader;
  [k: string]: unknown;
}

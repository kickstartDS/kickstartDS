/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

export type Value = number;
export type Max = number;
export type Indeterminate = boolean;
/**
 * Add additional css classes that should be applied to the progress bar
 */
export type AdditionalClasses = string;

/**
 * Progress Bar
 */
export interface ProgressBarProps {
  value?: Value;
  max?: Max;
  indeterminate?: Indeterminate;
  className?: AdditionalClasses;
  [k: string]: unknown;
}

/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `npm run schema2ts` to regenerate this file.
 */

/**
 * The label for the element
 */
export type Label = string;
/**
 * Whether the element should be selected
 */
export type Selected = boolean;
/**
 * The value of the input element, used when submitting an HTML form
 */
export type Value = string;
/**
 * The name of the input element, used when submitting an HTML form
 */
export type Name = string;
/**
 * Whether the input is disabled
 */
export type Disabled = boolean;

/**
 * Radio buttons allow users to select a single option from a list of mutually exclusive options.
 */
export interface RadioButtonProps {
  label: Label;
  checked?: Selected;
  value?: Value;
  name?: Name;
  disabled?: Disabled;
  [k: string]: unknown;
}

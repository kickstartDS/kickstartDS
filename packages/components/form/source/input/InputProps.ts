/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
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
 * Whether user input is required on the input before form submission
 */
export type Required = boolean;
/**
 * Whether the input is disabled
 */
export type Disabled = boolean;
/**
 * Temporary text that occupies the text input when it is empty
 */
export type Placeholder = string;
/**
 * Hide label visually
 */
export type HideLabel = boolean;
/**
 * Decoration Icon
 */
export type Icon = string;
/**
 * Wheter the input is invalid
 */
export type Invalid = boolean;
/**
 * Message to show if the input is invalid
 */
export type InvalidMessage = string;
/**
 * Help text that gives more context about what a user needs to input
 */
export type HintMessage = string;

export interface InputProps {
  label?: Label;
  selected?: Selected;
  value?: Value;
  name?: Name;
  required?: Required;
  disabled?: Disabled;
  placeholder?: Placeholder;
  hideLabel?: HideLabel;
  icon?: Icon;
  invalid?: Invalid;
  invalidMessage?: InvalidMessage;
  hint?: HintMessage;
  [k: string]: unknown;
}
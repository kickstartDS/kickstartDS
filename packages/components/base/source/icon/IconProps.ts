/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type IconIdentifier = string;
export type AriaRole = string;
export type AdditionalClass = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

/**
 * Icon
 */
export interface IconProps {
  icon: IconIdentifier;
  role?: AriaRole;
  className?: AdditionalClass;
  component?: KsComponentAttribute;
}

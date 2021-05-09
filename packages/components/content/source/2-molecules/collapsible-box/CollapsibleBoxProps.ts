/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `npm run schema2ts` to regenerate this file.
 */

/**
 * Include the text for the collapsible that should be visible before opening
 */
export type SummaryTextForTheCollapsible = string;
/**
 * Include the text for the collapsible that should be visible after opening
 */
export type ContentOfTheCollapsible = string;

/**
 * Component to conditionally show additional info
 */
export interface CollapsibleBoxProps {
  summary: SummaryTextForTheCollapsible;
  text: ContentOfTheCollapsible;
}

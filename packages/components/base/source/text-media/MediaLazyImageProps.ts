/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

import type { LightboxImageProps } from '@kickstartds/base/lib/lightbox-image/typing';

/**
 * Display media item over full width
 */
export type FullWidthMedia = boolean;
/**
 * Caption
 */
export type Caption = string;

export interface MediaLazyImageProps {
  /**
   * Referenced component LightboxImageProps
   */
  lightboxImage?: LightboxImageProps;
  full?: FullWidthMedia;
  caption?: Caption;
}

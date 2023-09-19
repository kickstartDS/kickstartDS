import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import type { TeaserRowProps as TeaserRowSchemaProps } from './typing';
import { Teaser } from '../teaser';
import { TeaserProps } from '../teaser/typing';

export type TeaserRowProps = TeaserRowSchemaProps & TeaserProps;

export const TeaserRowComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TeaserRowProps & HTMLAttributes<HTMLDivElement>
> = ({ className, ...props }, ref) => (
  <Teaser
    className={classnames('c-teaser-row', className)}
    ref={ref}
    {...props}
  />
);

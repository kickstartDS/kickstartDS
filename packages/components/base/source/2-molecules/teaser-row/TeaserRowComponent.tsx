import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { TeaserRowProps as TeaserRowSchemaProps } from './TeaserRowProps';
import { Teaser, TeaserProps } from '../teaser';

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

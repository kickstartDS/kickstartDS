import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Picture } from '../image/picture';
import { TeaserBoxProps as TeaserBoxSchemaProps } from './typing';
import { Teaser } from '../teaser';
import type { TeaserProps } from '../teaser/typing';

export type TeaserBoxProps = TeaserBoxSchemaProps & TeaserProps;

export const TeaserBoxComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TeaserBoxProps & HTMLAttributes<HTMLDivElement>
> = ({ image, ratio, imageSpacing = false, className, ...props }, ref) => (
  <Teaser
    className={classnames(
      'c-teaser-box',
      { 'image--spacing': imageSpacing },
      className
    )}
    ref={ref}
    {...props}
  >
    {image && (
      <div
        className={classnames({
          'c-teaser__image--four-to-three': ratio === '4:3',
          'c-teaser__image--sixteen-to-nine': ratio === '16:9',
          'c-teaser__image--square': ratio === '1:1',
        })}
      >
        <Picture src={image} alt="" className="c-teaser__image" />
      </div>
    )}
  </Teaser>
);

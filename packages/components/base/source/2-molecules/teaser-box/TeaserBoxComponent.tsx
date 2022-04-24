import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createContext,
} from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import classnames from 'classnames';
import { Picture } from '../../1-atoms/image/picture';
import { TeaserBoxProps as TeaserBoxSchemaProps } from './TeaserBoxProps';
import { Teaser, type TeaserProps } from '../teaser';

export type TeaserBoxProps = TeaserBoxSchemaProps & TeaserProps;

export const TeaserBoxComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TeaserBoxProps & HTMLAttributes<HTMLDivElement>
> = ({ image, ratio, imageSpacing, className, ...props }, ref) => (
  <Teaser
    className={classnames(
      'c-teaser-box',
      { 'image--spacing': imageSpacing },
      className
    )}
    data-component="base.teaser"
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

export const TeaserBoxContextDefault = forwardRef(TeaserBoxComponent);
export const TeaserBoxContext = createContext(TeaserBoxContextDefault);
export const TeaserBox = withContainer('teaser-box', TeaserBoxContext);

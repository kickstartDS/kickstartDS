import {
  createContext,
  FunctionComponent,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { Picture } from '../../1-atoms/image/picture';
import { TeaserBoxProps } from './TeaserBoxProps';
import { Teaser, TeaserRenderFunctions } from '../teaser/TeaserComponent';
import './teaser-box.scss';

const TeaserBoxComponent: FunctionComponent<
  TeaserBoxProps & TeaserRenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({ image, ratio, imageSpacing, className, ...props }) => (
  <Teaser
    className={classnames(
      'c-teaser-box',
      { 'image--spacing': imageSpacing },
      className
    )}
    data-component="base.teaser"
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

export const TeaserBoxContextDefault = TeaserBoxComponent;
export const TeaserBoxContext = createContext(TeaserBoxContextDefault);
export const TeaserBox: typeof TeaserBoxContextDefault = (props) => {
  const Component = useContext(TeaserBoxContext);
  return <Component {...props} />;
};

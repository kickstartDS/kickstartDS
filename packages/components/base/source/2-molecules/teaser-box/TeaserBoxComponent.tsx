import { createContext, FunctionComponent, useContext } from 'react';
import classnames from 'classnames';
import { LinkButton } from '../../1-atoms/button/link-button';
import { Picture } from '../../1-atoms/image/picture';
import { RichText } from '../../1-atoms/rich-text';
import { TeaserBoxProps } from './TeaserBoxProps';
import './teaser-box.scss';
import './TeaserBox.js';

const TeaserBoxComponent: FunctionComponent<TeaserBoxProps> = ({
  image,
  topic,
  text,
  darkStyle,
  link,
  ratio,
  imageSpacing,
}) => (
  <div
    className={classnames('c-teaser-box', {
      'c-teaser-box--style-dark': darkStyle,
      'image--spacing': imageSpacing,
    })}
    data-component="base.teaser-box"
  >
    {image && (
      <div
        className={classnames({
          'c-teaser-box__image--four-to-three': ratio === '4:3',
          'c-teaser-box__image--sixteen-to-nine': ratio === '16:9',
          'c-teaser-box__image--square': ratio === '1:1',
        })}
      >
        <Picture src={image} alt="" className="c-teaser-box__image" />
      </div>
    )}
    <div
      className="c-teaser-box__body"
      hidden={!topic && !text && (!link || link.hidden)}
    >
      <div className="c-teaser-box__text">
        <p className="c-teaser-box__topic">{topic}</p>
        {text && <RichText text={text} />}
      </div>
      {link?.label ? (
        <div className="c-teaser-box__link" hidden={link.hidden}>
          <LinkButton {...link} />
        </div>
      ) : (
        ''
      )}
    </div>
  </div>
);

export const TeaserBoxContextDefault = TeaserBoxComponent;
export const TeaserBoxContext = createContext(TeaserBoxContextDefault);
export const TeaserBox: typeof TeaserBoxContextDefault = (props) => {
  const Component = useContext(TeaserBoxContext);
  return <Component {...props} />;
};

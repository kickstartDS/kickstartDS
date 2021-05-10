import { createContext, FunctionComponent, useContext } from 'react';
import classnames from 'classnames';
import { RichText } from '../../1-atoms/rich-text';
import { LinkButton } from '../../1-atoms/button/link-button';
import { Picture } from '../../1-atoms/image/picture';
import { ContentBoxProps } from './ContentBoxProps';
import './content-box.scss';
import './ContentBox.js';

const ContentBoxComponent: FunctionComponent<ContentBoxProps> = ({
  image,
  topic,
  alignement,
  text,
  link,
  ratio,
}) => (
  <div
    className={classnames(
      'c-content-box',
      alignement !== 'left' && `c-content-box--align-${alignement}`
    )}
  >
    {image && (
      <div
        className={classnames('c-content-box__image', {
          'c-content-box__image--four-to-three': ratio === '4:3',
          'c-content-box__image--sixteen-to-nine': ratio === '16:9',
          'c-content-box__image--square': ratio === '1:1',
        })}
      >
        <Picture src={image} alt="" objectFit={true} />
      </div>
    )}
    <div className="c-content-box__body">
      <div className="c-content-box__text">
        {topic && <p className="c-content-box__topic">{topic}</p>}
        {text && <RichText text={text} />}
      </div>
      {link?.label && (
        <div className="c-content-box__link">
          <LinkButton {...link} />
        </div>
      )}
    </div>
  </div>
);

export const ContentBoxContextDefault = ContentBoxComponent;
export const ContentBoxContext = createContext(ContentBoxContextDefault);
export const ContentBox: typeof ContentBoxContextDefault = (props) => {
  const Component = useContext(ContentBoxContext);
  return <Component {...props} />;
};

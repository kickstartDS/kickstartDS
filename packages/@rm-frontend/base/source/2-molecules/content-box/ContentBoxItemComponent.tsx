import { createContext, FunctionComponent, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';
import { LinkButton } from '../../1-atoms/button/button-link/LinkButtonComponent';
import { Picture } from '../../1-atoms/image/PictureComponent';
import { ContentBoxItemProps } from './ContentBoxItemProps';
import './content-box.css';

const ContentBoxItemComponent: FunctionComponent<ContentBoxItemProps> = ({
  image,
  topic,
  alignement,
  text,
  link,
  ratio,
}) => (
  <div className="content-box-item">
    {image && (
      <div
        className={classnames('content-box__item__image', {
          'content-box__item__image--four-to-three': ratio === '4:3',
          'content-box__item__image--sixteen-to-nine': ratio === '16:9',
          'content-box__item__image--square': ratio === '1:1',
          [`content-box__item__image--align-${alignement}`]:
            (!ratio || ratio === 'none') && alignement !== 'left',
        })}
      >
        <Picture src={image} alt="" objectFit={true} />
      </div>
    )}
    <div className="content-box__item__box">
      <div className="content-box__text">
        {topic && <p className="content-box__topic">{topic}</p>}
        {text && <ReactMarkdown children={text} />}
      </div>
      {link?.label && (
        <div className="content-box__link">
          <LinkButton {...link} />
        </div>
      )}
    </div>
  </div>
);

export const ContentBoxItemContextDefault = ContentBoxItemComponent;
export const ContentBoxItemContext = createContext(
  ContentBoxItemContextDefault
);
export const ContentBoxItem: typeof ContentBoxItemContextDefault = (props) => {
  const Component = useContext(ContentBoxItemContext);
  return <Component {...props} />;
};

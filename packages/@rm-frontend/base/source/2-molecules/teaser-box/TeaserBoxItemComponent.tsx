import { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';
import { LinkButton } from '../../1-atoms/button/button-link/LinkButtonComponent';
import { Picture } from '../../1-atoms/image/PictureComponent';
import { TeaserBoxItemProps } from './TeaserBoxItemProps';
import './teaser-box-item.css';

export const TeaserBoxItem: FunctionComponent<TeaserBoxItemProps> = ({
  image,
  topic,
  text,
  darkStyle,
  link,
  ratio,
  imageSpacing,
}) => (
  <div className="teaser-box">
    <div
      className={classnames('teaser-box__item', {
        'teaser-box__item--style-dark': darkStyle,
        'image--spacing': imageSpacing,
      })}
      data-component="base.teaser-box"
    >
      {image && (
        <div
          className={classnames({
            'teaser-box__item__image--four-to-three': ratio === '4:3',
            'teaser-box__item__image--sixteen-to-nine': ratio === '16:9',
            'teaser-box__item__image--square': ratio === '1:1',
          })}
        >
          <Picture src={image} alt="" className="teaser-box__item__image" />
        </div>
      )}
      <div
        className="teaser-box__item__box"
        hidden={!topic && !text && (!link || link.hidden)}
      >
        <div className="teaser-box__text">
          <p className="teaser-box__topic">{topic}</p>
          {text && <ReactMarkdown children={text} />}
        </div>
        {link?.label ? (
          <div className="teaser-box__link" hidden={link.hidden}>
            <LinkButton {...link} />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  </div>
);

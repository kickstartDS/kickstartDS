import {
  createContext,
  FunctionComponent,
  useContext,
  HTMLAttributes,
  createElement,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '../../1-atoms/rich-text';
import { LinkButton } from '../../1-atoms/button/link-button';
import { Picture } from '../../1-atoms/image/picture';
import { ContentBoxProps } from './ContentBoxProps';
import './content-box.scss';
import './ContentBox.js';

interface RenderFunctions {
  renderTopic?: renderFn;
  renderText?: renderFn;
}

const ContentBoxComponent: FunctionComponent<
  ContentBoxProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({
  image,
  topic,
  alignement,
  text,
  link,
  ratio,
  renderTopic = defaultRenderFn,
  renderText = richTextDefaultRenderFn,
  className,
  ...props
}) => (
  <div
    className={classnames(
      'c-content-box',
      alignement &&
        alignement !== 'left' &&
        `c-content-box--align-${alignement}`,
      className
    )}
    {...props}
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
        {topic && <p className="c-content-box__topic">{renderTopic(topic)}</p>}
        {text && <RichText text={text} renderText={renderText} />}
      </div>
      {link && link.enabled && (
        <div className="c-content-box__link">
          <LinkButton {...{ ...link, enabled: undefined }} />
        </div>
      )}
    </div>
  </div>
);

export const ContentBoxContextDefault = ContentBoxComponent;
export const ContentBoxContext = createContext(ContentBoxContextDefault);
export const ContentBox: typeof ContentBoxContextDefault = (props) =>
  createElement(useContext(ContentBoxContext), props);

import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createContext,
} from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '../../1-atoms/rich-text';
import { LinkButton } from '../../1-atoms/button/link-button';
import { Picture } from '../../1-atoms/image/picture';
import { type ContentBoxProps as ContentBoxSchemaProps } from './ContentBoxProps';

export type ContentBoxProps = ContentBoxSchemaProps & {
  renderTopic?: renderFn;
  renderText?: renderFn;
};

export const ContentBoxComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  ContentBoxProps & HTMLAttributes<HTMLDivElement>
> = (
  {
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
  },
  ref
) => (
  <div
    className={classnames(
      'c-content-box',
      alignement &&
        alignement !== 'left' &&
        `c-content-box--align-${alignement}`,
      className
    )}
    ref={ref}
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
        <Picture src={image} alt="" />
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

export const ContentBoxContextDefault = forwardRef(ContentBoxComponent);
export const ContentBoxContext = createContext(ContentBoxContextDefault);
export const ContentBox = withContainer('content-box', ContentBoxContext);

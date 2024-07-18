import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '../rich-text';
import { Button } from '../button';
import { Picture } from '../picture';
import type { ContentBoxProps as ContentBoxSchemaProps } from './typing';
import { Headline } from '../headline';

export type ContentBoxProps = ContentBoxSchemaProps & {
  renderHeadline?: typeof defaultRenderFn;
  renderText?: typeof richTextDefaultRenderFn;
};

export const ContentBoxComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  ContentBoxProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    image,
    headline,
    alignement = 'left',
    text,
    link,
    ratio = 'none',
    renderHeadline = defaultRenderFn,
    renderText = richTextDefaultRenderFn,
    className,
    component,
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
    ks-component={component}
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
        {headline && (
          <>
            {renderHeadline(
              //TBD: topic
              <Headline
                className="c-content-box__headline"
                content={headline}
              />
            )}
          </>
        )}
        {text && (
          <RichText
            className="c-content-box__rich-text"
            text={text}
            renderText={renderText}
          />
        )}
      </div>
      {link && link.enabled && (
        <div className="c-content-box__link">
          <Button {...{ ...link, enabled: undefined }} />
        </div>
      )}
    </div>
  </div>
);

import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '../../1-atoms/rich-text';
import { Button } from '../../1-atoms/button';
import { TeaserProps } from './TeaserProps';
import './teaser.scss';
import './Teaser.js';

export interface TeaserRenderFunctions {
  renderTopic?: renderFn;
  renderText?: renderFn;
}

export const TeaserComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TeaserProps & TeaserRenderFunctions & HTMLAttributes<HTMLDivElement>
> = (
  {
    topic,
    text,
    darkStyle,
    link,
    renderText = richTextDefaultRenderFn,
    renderTopic = defaultRenderFn,
    className,
    children,
    ...props
  },
  ref
) => (
  <div
    className={classnames(
      'c-teaser',
      {
        'c-teaser--style-dark': darkStyle,
      },
      className
    )}
    data-component="base.teaser"
    ref={ref}
    {...props}
  >
    {children}
    <div
      className="c-teaser__body"
      hidden={!topic && !text && (!link || link.hidden)}
    >
      <div className="c-teaser__text">
        <p className="c-teaser__topic">{renderTopic(topic)}</p>
        {text && <RichText text={text} renderText={renderText} />}
      </div>
      {link?.label ? (
        <div className="c-teaser__link" hidden={link.hidden}>
          <Button {...link} />
        </div>
      ) : (
        ''
      )}
    </div>
  </div>
);

export const TeaserContextDefault = forwardRef(TeaserComponent);
export const TeaserContext = createContext(TeaserContextDefault);
export const Teaser: typeof TeaserContextDefault = forwardRef((props, ref) =>
  createElement(useContext(TeaserContext), { ...props, ref })
);

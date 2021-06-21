import { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '../../1-atoms/rich-text';
import { LinkButton } from '../../1-atoms/button/link-button';
import { TeaserProps } from './TeaserProps';
import './teaser.scss';
import './Teaser.js';

export interface TeaserRenderFunctions {
  renderTopic?: renderFn;
  renderText?: renderFn;
}

export const Teaser: FunctionComponent<
  TeaserProps & TeaserRenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({
  topic,
  text,
  inverted,
  link,
  renderText = richTextDefaultRenderFn,
  renderTopic = defaultRenderFn,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames(
      'c-teaser',
      inverted ? 'g-inverted' : 'g-inverted-reset',
      className
    )}
    data-component="base.teaser"
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
          <LinkButton {...link} />
        </div>
      ) : (
        ''
      )}
    </div>
  </div>
);

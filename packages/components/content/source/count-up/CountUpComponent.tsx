import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '@kickstartds/base/lib/icon';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import { Button } from '@kickstartds/base/lib/button';
import type { CountUpProps as CountUpSchemaProps } from './CountUpProps';

export type CountUpProps = CountUpSchemaProps & {
  renderTo?: typeof defaultRenderFn;
  renderTopic?: typeof defaultRenderFn;
  renderText?: typeof richTextDefaultRenderFn;
  renderLinkLabel?: typeof defaultRenderFn;
};

export const CountUpComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  CountUpProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    icon,
    to,
    topic,
    text,
    link,
    renderTo = defaultRenderFn,
    renderTopic = defaultRenderFn,
    renderText = richTextDefaultRenderFn,
    renderLinkLabel = defaultRenderFn,
    className,
    expand = -100,
    ...props
  },
  ref
) => (
  <div className={classnames('c-count-up', className)} ref={ref} {...props}>
    {icon && icon.icon ? (
      <div className="c-count-up__icon">
        <Icon {...icon} />
      </div>
    ) : (
      ''
    )}

    <div
      className="c-count-up__number"
      data-component="content.count-up"
      data-expand={expand}
    >
      {renderTo(to)}
    </div>

    {topic ? <div className="c-count-up__topic">{renderTopic(topic)}</div> : ''}

    {text && (
      <RichText
        text={text}
        className="c-count-up__text"
        renderText={renderText}
      />
    )}

    {link && link.enabled ? (
      <div className="c-count-up__link">
        <Button {...link} renderLabel={renderLinkLabel} />
      </div>
    ) : (
      ''
    )}
  </div>
);

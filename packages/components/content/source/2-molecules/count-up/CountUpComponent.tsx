import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import {
  renderFn,
  renderTextFn,
  defaultRenderFn,
} from '@kickstartds/core/lib/core';
import { Icon } from '@kickstartds/base/lib/icon';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/lib/rich-text';
import { LinkButton } from '@kickstartds/base/lib/link-button';
import { type CountUpProps as CountUpSchemaProps } from './CountUpProps';

export type CountUpProps = CountUpSchemaProps & {
  renderTo?: renderFn;
  renderTopic?: renderFn;
  renderText?: renderTextFn;
  renderLinkLabel?: renderFn;
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
    expand,
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
      data-expand={expand || -100}
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
        <LinkButton {...link} renderLabel={renderLinkLabel} />
      </div>
    ) : (
      ''
    )}
  </div>
);

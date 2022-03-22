import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
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
import { Button } from '@kickstartds/base/lib/button';
import { CountUpProps } from './CountUpProps';
import './count-up.scss';
import './CountUp.js';

interface RenderFunctions {
  renderTo?: renderFn;
  renderTopic?: renderFn;
  renderText?: renderTextFn;
  renderLinkLabel?: renderFn;
}

const CountUpComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  CountUpProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
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
        <Button {...link} renderLabel={renderLinkLabel} />
      </div>
    ) : (
      ''
    )}
  </div>
);

export const CountUpContextDefault = forwardRef(CountUpComponent);
export const CountUpContext = createContext(CountUpContextDefault);
export const CountUp: typeof CountUpContextDefault = forwardRef((props, ref) =>
  createElement(useContext(CountUpContext), { ...props, ref })
);

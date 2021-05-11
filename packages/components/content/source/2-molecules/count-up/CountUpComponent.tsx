import { createContext, FunctionComponent, useContext } from 'react';
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
import { CountUpProps } from './CountUpProps';
import './count-up.scss';
import './CountUp.js';

interface RenderFunctions {
  renderTo?: renderFn;
  renderTopic?: renderFn;
  renderText?: renderTextFn;
  renderLinkLabel?: renderFn;
}

const CountUpComponent: FunctionComponent<CountUpProps & RenderFunctions> = ({
  icon,
  to,
  topic,
  text,
  link,
  renderTo = defaultRenderFn,
  renderTopic = defaultRenderFn,
  renderText = richTextDefaultRenderFn,
  renderLinkLabel = defaultRenderFn,
}) => (
  <div className="c-count-up">
    {icon && icon.icon ? (
      <div className="c-count-up__icon">
        <Icon {...icon} />
      </div>
    ) : (
      ''
    )}

    <div className="c-count-up__number" data-component="content.count-up">
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

    {link ? (
      <div className="c-count-up__link">
        <LinkButton {...link} renderLabel={renderLinkLabel} />
      </div>
    ) : (
      ''
    )}
  </div>
);

export const CountUpContextDefault = CountUpComponent;
export const CountUpContext = createContext(CountUpContextDefault);
export const CountUp: typeof CountUpContextDefault = (props) => {
  const Component = useContext(CountUpContext);
  return <Component {...props} />;
};

import {
  createContext,
  FunctionComponent,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/core';
import { Icon } from '@kickstartds/base/icon';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/rich-text';
import { CollapsibleBoxProps } from './CollapsibleBoxProps';
import './collapsible-box.scss';
import './lazyCollapsibleBox.js';

export interface RenderFunctions {
  renderText?: renderFn;
  renderSummary?: renderFn;
}

const CollapsibleBoxComponent: FunctionComponent<
  CollapsibleBoxProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({
  summary,
  renderSummary = defaultRenderFn,
  text,
  renderText = richTextDefaultRenderFn,
  children,
  className,
  ...props
}) => (
  <div
    className={classnames('c-collapsible-box lazyload', className)}
    data-component="content.collapsible-box"
    {...props}
  >
    <details>
      <summary className="c-collapsible-box__header">
        <div className="c-collapsible-box__header-wrapper">
          <span className="c-collapsible-box__header__text">
            {renderSummary(summary)}
          </span>
          <span className="c-collapsible-box__header__icon">
            <Icon icon="chevron-down" />
          </span>
        </div>
      </summary>
      <div className="c-collapsible-box__content">
        {text ? (
          <RichText
            className="c-collapsible-box__content__item"
            text={text}
            renderText={renderText}
          />
        ) : (
          <div className="c-collapsible-box__content__item">{children}</div>
        )}
      </div>
    </details>
  </div>
);

export const CollapsibleBoxContextDefault = CollapsibleBoxComponent;
export const CollapsibleBoxContext = createContext(
  CollapsibleBoxContextDefault
);
export const CollapsibleBox: typeof CollapsibleBoxContextDefault = (props) => {
  const Component = useContext(CollapsibleBoxContext);
  return <Component {...props} />;
};

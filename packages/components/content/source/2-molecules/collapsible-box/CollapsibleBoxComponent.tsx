import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/core';
import { Icon } from '@kickstartds/base/icon';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '@kickstartds/base/rich-text';
import { type CollapsibleBoxProps as CollapsibleBoxSchemaProps } from './CollapsibleBoxProps';

export type CollapsibleBoxProps = CollapsibleBoxSchemaProps & {
  renderText?: typeof richTextDefaultRenderFn;
  renderSummary?: typeof defaultRenderFn;
};

export const CollapsibleBoxComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  CollapsibleBoxProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    summary,
    renderSummary = defaultRenderFn,
    text,
    renderText = richTextDefaultRenderFn,
    children,
    className,
    ...props
  },
  ref
) => (
  <div
    className={classnames('c-collapsible-box lazyload', className)}
    data-component="content.collapsible-box"
    ref={ref}
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

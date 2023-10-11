import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '../icon';
import {
  RichTextContextDefault,
  defaultRenderFn as richTextDefaultRenderFn,
} from '../rich-text';
import type { CollapsibleBoxProps as CollapsibleBoxSchemaProps } from './typing';

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
    component = 'base.collapsible-box',
    ...props
  },
  ref
) => (
  <div
    className={classnames('c-collapsible-box lazyload', className)}
    ks-component={component}
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
          <RichTextContextDefault
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

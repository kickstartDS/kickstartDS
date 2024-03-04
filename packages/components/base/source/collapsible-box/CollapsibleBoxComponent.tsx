import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '../icon';
import {
  RichText,
  defaultRenderFn as richTextDefaultRenderFn,
} from '../rich-text';
import type { CollapsibleBoxProps as CollapsibleBoxSchemaProps } from './typing';

export type CollapsibleBoxProps = CollapsibleBoxSchemaProps & {
  renderText?: typeof richTextDefaultRenderFn;
  renderSummary?: typeof defaultRenderFn;
};

export const CollapsibleBoxComponent: ForwardRefRenderFunction<
  HTMLDetailsElement,
  CollapsibleBoxProps & HTMLAttributes<HTMLDetailsElement>
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
  <details
    className={classnames('c-collapsible-box lazyload', className)}
    ks-component={component}
    ref={ref}
    {...props}
  >
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
      <div className="c-collapsible-box__content__item">
        {text ? (
          <RichText
            className="c-collapsible-box__content__inner"
            text={text}
            renderText={renderText}
          />
        ) : (
          <div className="c-collapsible-box__content__inner">{children}</div>
        )}
      </div>
    </div>
  </details>
);

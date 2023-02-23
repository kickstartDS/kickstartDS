import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
// import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '../icon';
import { BannerProps as BannerSchemaProps } from './BannerProps';
import { RichText } from '../rich-text';

// TODO: Remove renderLabel

export type BannerProps = BannerSchemaProps & {
  // renderLabel?: typeof defaultRenderFn;
};

export const BannerComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  BannerProps & HTMLAttributes<HTMLDivElement>
> = (
  { title, message, component, size, type, contrast, className, ...props },
  ref
) => (
  <div
    className={classnames(
      'c-banner',
      `c-banner--${size}`,
      `c-banner--${type}`,
      `c-banner--contrast-${contrast}`,
      className
    )}
    ks-component={component}
    ref={ref}
    {...props}
  >
    {type === 'info' ? (
      <Icon className="c-banner__icon" icon="info" />
    ) : type === 'error' ? (
      <Icon className="c-banner__icon" icon="close" />
    ) : type === 'succes' ? (
      <Icon className="c-banner__icon" icon="chevron-right" />
    ) : type === 'warning' ? (
      <Icon className="c-banner__icon" icon="chevron-right" />
    ) : (
      ''
    )}
    <div>
      {title ? <span className="c-banner__title">{title}</span> : ''}
      <RichText className="c-banner__message" text={message} />
    </div>
  </div>
);

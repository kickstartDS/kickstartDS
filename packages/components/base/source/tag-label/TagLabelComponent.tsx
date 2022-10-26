import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '../icon';
import { Link } from '../link';
import { TagLabelProps as TagLabelSchemaProps } from './TagLabelProps';

export type TagLabelProps = TagLabelSchemaProps & {
  renderLabel?: typeof defaultRenderFn;
};

export const TagLabelComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TagLabelProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    label,
    size = 'm',
    link,
    removable = false,
    renderLabel = defaultRenderFn,
    className,
    component = removable ? 'base.tag-label' : null,
    ...props
  },
  ref
) => (
  <div
    className={classnames('c-tag-label', `c-tag-label--${size}`, className)}
    ks-component={component}
    ref={ref}
    {...props}
  >
    {link ? (
      <Link href={link} className="c-tag-label__content">
        {renderLabel(label)}
      </Link>
    ) : (
      <span className="c-tag-label__content">{label}</span>
    )}
    {removable && (
      <button className="c-tag-label__remove-btn" title="entfernen">
        <Icon icon="close" role="none" />
      </button>
    )}
  </div>
);

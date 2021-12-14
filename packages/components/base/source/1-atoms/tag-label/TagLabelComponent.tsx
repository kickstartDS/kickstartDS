import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classnames from 'classnames';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '../icon';
import { Link } from '../link';
import { TagLabelProps } from './TagLabelProps';
import './tag-label.scss';
import './TagLabel.js';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const TagLabelComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TagLabelProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = (
  {
    label,
    size = 'm',
    link,
    removable,
    renderLabel = defaultRenderFn,
    className,
    ...props
  },
  ref
) => (
  <div
    className={classnames('c-tag-label', `c-tag-label--${size}`, className)}
    data-component={removable ? 'base.tag-label' : null}
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

export const TagLabelContextDefault = forwardRef(TagLabelComponent);
export const TagLabelContext = createContext(TagLabelContextDefault);
export const TagLabel: typeof TagLabelContextDefault = forwardRef(
  (props, ref) => createElement(useContext(TagLabelContext), { ...props, ref })
);

import { FunctionComponent, createContext, useContext } from 'react';
import { renderFn, defaultRenderFn } from '@kickstartds/core/lib/core';
import { Icon } from '../icon';
import { Link } from '../link';
import { TagLabelProps } from './TagLabelProps';
import './tag-label.scss';
import './TagLabel.js';

interface RenderFunctions {
  renderLabel?: renderFn;
}

const TagLabelComponent: FunctionComponent<TagLabelProps & RenderFunctions> = ({
  label,
  size = 'm',
  link,
  removable,
  renderLabel = defaultRenderFn,
}) => (
  <div
    className={`c-tag-label c-tag-label--${size}`}
    data-component={removable ? 'base.tag-label' : null}
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

export const TagLabelContextDefault = TagLabelComponent;
export const TagLabelContext = createContext(TagLabelContextDefault);
export const TagLabel: typeof TagLabelContextDefault = (props) => {
  const Component = useContext(TagLabelContext);
  return <Component {...props} />;
};

import { FunctionComponent, createContext, useContext } from 'react';
import { Icon } from '../icon';
import { Link } from '../link';
import { TagLabelProps } from './TagLabelProps';
import './tag-label.scss';

const TagLabelComponent: FunctionComponent<TagLabelProps> = ({
  label,
  size = 'm',
  link,
  removable,
}) => (
  <div
    className={`tag-label tag-label--${size}`}
    data-component={removable ? 'base.tag-label' : null}
  >
    {link ? (
      <Link href={link} className="tag-label__content">
        {label}
      </Link>
    ) : (
      <span className="tag-label__content">{label}</span>
    )}
    {removable && (
      <button className="tag-label__remove-btn" title="entfernen">
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

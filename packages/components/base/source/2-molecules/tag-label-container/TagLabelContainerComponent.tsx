import {
  FunctionComponent,
  HTMLAttributes,
  createContext,
  useContext,
} from 'react';
import classNames from 'classnames';
import { TagLabel, TagLabelProps } from '../../1-atoms/tag-label';
import './tag-label-container.scss';

interface TagLabelContainerProps {
  tagLabels: TagLabelProps[];
}

export const TagLabelContainerComponent: FunctionComponent<
  TagLabelContainerProps & HTMLAttributes<HTMLDivElement>
> = ({ tagLabels = [], className }) => (
  <div className={classNames('tag-label-container', className)}>
    {tagLabels.map((tagLabel, i) => (
      <div key={`tag-label-${i}`}>
        <TagLabel {...tagLabel} />
      </div>
    ))}
  </div>
);

export const TagLabelContainerContextDefault = TagLabelContainerComponent;
export const TagLabelContainerContext = createContext(
  TagLabelContainerContextDefault
);
export const TagLabelContainer: typeof TagLabelContainerContextDefault = (
  props
) => {
  const Component = useContext(TagLabelContainerContext);
  return <Component {...props} />;
};

import { FunctionComponent } from 'react';
import { TagLabel, TagLabelProps } from '../../1-atoms/tag-label';
import './tag-label-container.scss';

interface TagLabelContainerProps {
  tagLabels: TagLabelProps[];
}

export const TagLabelContainer: FunctionComponent<TagLabelContainerProps> = ({
  tagLabels = [],
}) => (
  <div className="tag-label-container">
    {tagLabels.map((tagLabel, i) => (
      <div key={`tag-label-${i}`}>
        <TagLabel {...tagLabel} />
      </div>
    ))}
  </div>
);

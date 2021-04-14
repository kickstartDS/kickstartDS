import { FunctionComponent } from 'react';
import { TagLabel } from '../../1-atoms/tag-label/TagLabelComponent';
import { TagLabelProps } from '../../1-atoms/tag-label/TagLabelProps';
import './tag-label-container.css';

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

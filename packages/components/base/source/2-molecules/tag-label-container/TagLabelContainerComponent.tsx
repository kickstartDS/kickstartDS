import { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { TagLabel, TagLabelProps } from '../../1-atoms/tag-label';
import './tag-label-container.scss';

interface TagLabelContainerProps {
  tagLabels: TagLabelProps[];
}

export const TagLabelContainer: FunctionComponent<
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

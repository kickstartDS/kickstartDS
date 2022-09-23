import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { TagLabel, TagLabelProps } from '../tag-label';

export type TagLabelContainerProps = {
  tagLabels: TagLabelProps[];
};

export const TagLabelContainerComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TagLabelContainerProps & HTMLAttributes<HTMLDivElement>
> = ({ tagLabels = [], className, ...props }, ref) => (
  <div
    className={classNames('tag-label-container', className)}
    {...props}
    ref={ref}
  >
    {tagLabels.map((tagLabel, i) => (
      <TagLabel {...tagLabel} key={i} />
    ))}
  </div>
);

import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { TagLabel } from '../tag-label';
import { TagLabelProps } from '../tag-label/typing';

export type TagLabelContainerProps = {
  tagLabels: TagLabelProps[];
  component?: string;
};

export const TagLabelContainerComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  TagLabelContainerProps & HTMLAttributes<HTMLDivElement>
> = ({ tagLabels = [], className, component, ...props }, ref) => (
  <div
    className={classNames('tag-label-container', className)}
    ks-component={component}
    {...props}
    ref={ref}
  >
    {tagLabels.map((tagLabel, i) => (
      <TagLabel {...tagLabel} key={i} />
    ))}
  </div>
);

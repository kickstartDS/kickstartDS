import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import classNames from 'classnames';
import { TagLabel, TagLabelProps } from '../../1-atoms/tag-label';
import './tag-label-container.scss';

interface TagLabelContainerProps {
  tagLabels: TagLabelProps[];
}

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

export const TagLabelContainerContextDefault = forwardRef(
  TagLabelContainerComponent
);
export const TagLabelContainerContext = createContext(
  TagLabelContainerContextDefault
);
export const TagLabelContainer: typeof TagLabelContainerContextDefault =
  forwardRef((props, ref) =>
    createElement(useContext(TagLabelContainerContext), { ...props, ref })
  );

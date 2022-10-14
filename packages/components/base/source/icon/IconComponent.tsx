import { ForwardRefRenderFunction, SVGAttributes } from 'react';
import classNames from 'classnames';
import type { IconProps } from './IconProps';

export { IconProps };
export const IconComponent: ForwardRefRenderFunction<
  SVGSVGElement,
  IconProps & SVGAttributes<SVGElement>
> = ({ icon, className, role, ...props }, ref) => (
  <svg
    className={classNames('icon', className)}
    role={role}
    ref={ref}
    {...props}
  >
    <use
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xlinkHref={icon ? `#icon-${icon}` : ''}
    ></use>
  </svg>
);

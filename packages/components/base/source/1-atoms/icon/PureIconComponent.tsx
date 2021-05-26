import { FunctionComponent, SVGAttributes } from 'react';
import classnames from 'classnames';
import { IconProps } from './IconProps';

export const Icon: FunctionComponent<IconProps & SVGAttributes<SVGElement>> = ({
  icon,
  className,
  role,
  ...props
}) => (
  <svg className={classnames('icon', className)} role={role} {...props}>
    <use
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xlinkHref={icon ? `#icon-${icon}` : ''}
    ></use>
  </svg>
);

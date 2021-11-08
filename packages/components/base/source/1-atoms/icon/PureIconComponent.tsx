import classNames from 'classnames';
import { FunctionComponent, SVGAttributes } from 'react';
import { IconProps } from './IconProps';

export const Icon: FunctionComponent<IconProps & SVGAttributes<SVGElement>> = ({
  icon,
  className,
  role,
  ...props
}) => (
  <svg className={classNames('icon', className)} role={role} {...props}>
    <use
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xlinkHref={icon ? `#icon-${icon}` : ''}
    ></use>
  </svg>
);

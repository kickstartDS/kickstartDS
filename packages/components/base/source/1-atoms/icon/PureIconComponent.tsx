import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { IconProps } from './IconProps';

export const Icon: FunctionComponent<IconProps> = ({
  icon,
  className,
  role,
}) => (
  <svg className={classnames('icon', className)} role={role}>
    <use
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xlinkHref={icon ? `#icon-${icon}` : ''}
    ></use>
  </svg>
);

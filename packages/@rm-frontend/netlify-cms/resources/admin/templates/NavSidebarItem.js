/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import { NavSidebarLevel } from './NavSidebarLevel';

export const NavSidebarItem = ({ level, link }) => (
  <li class={`nav-sidebar__item nav-sidebar__item--level-${level}`}>
    <a href="#" class="nav-sidebar__item__link" data-id="{link.page}">
      {link.label}
    </a>
    {link.links && link.links.length > 0 && (
      <NavSidebarLevel level={level + 1} links={link.links} />
    )}
  </li>
);

NavSidebarItem.propTypes = {
  level: PropTypes.number,
  link: PropTypes.object,
};

export default NavSidebarItem;

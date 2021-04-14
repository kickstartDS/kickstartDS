/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import NavSidebarItem from './NavSidebarItem';

export const NavSidebarLevel = ({ level, links }) => (
  <ul class={`nav-sidebar__list nav-sidebar__list--level-${level}`}>
    {links.map((link, index) => (
      <NavSidebarItem key={`navigation${index}`} level={level} link={link} />
    ))}
  </ul>
);

NavSidebarLevel.propTypes = {
  level: PropTypes.number,
  links: PropTypes.array,
};

export default NavSidebarLevel;

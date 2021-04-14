/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';

const SidebarWrapper = ({ children }) => {
  return (
    <div id="sidebar" class="page-wrap__sidebar" data-component="base.sidebar">
      <div class="page-wrap__sidebar__content" id="sidebar-content">
        <div class="logo-main-wrap">
          <meta itemProp="name" content="25SheepStreet" />
          <a href="/" class="logo-main" itemProp="url" title="Startseite">
            <img
              src="/images/logo-dark.svg"
              alt="Startseite"
              itemProp="logo"
              width="230"
              height="33"
            />
          </a>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SidebarWrapper;

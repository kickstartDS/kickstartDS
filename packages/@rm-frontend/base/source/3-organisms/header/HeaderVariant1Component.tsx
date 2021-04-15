import { FunctionComponent } from 'react';
import { NavMeta } from '../../2-molecules/nav/nav-meta';
import { Logo } from '../../2-molecules/logo';
import { NavMain } from '../../2-molecules/nav/nav-meta';

import navJsonData from '../../2-molecules/nav/nav-main/data.json';
import './header.scss';

// TODO render meta conditionally
// TODO readd {{try "molecules-contact-flag-label" }}
// TODO get dynamic data for header / props
// TODO add schema / storybook
export const HeaderVariant1: FunctionComponent = () => (
  <>
    <header
      className="main-header main-header--variant-1"
      data-component="base.header"
      itemScope
      id="microdata-org"
      itemType="http://schema.org/Organization"
      itemProp="publisher author"
      itemRef="microdata-org-address microdata-org-social"
    >
      <div className="nav-meta-container">
        <NavMeta />
      </div>

      <div className="main-header__logo-nav">
        <Logo />
        <NavMain {...navJsonData} />
      </div>
    </header>

    <div className="main-header-spacer"></div>
  </>
);

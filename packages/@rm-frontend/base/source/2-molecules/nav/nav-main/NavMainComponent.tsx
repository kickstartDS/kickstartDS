import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { NavToggle } from '../../../1-atoms/nav-toggle/NavToggleComponent';
import { Icon } from '../../../1-atoms/icon/IconComponent';
import { Link } from '../../../1-atoms/link/LinkComponent';
import './nav-main.css';

// TODO add schema / storybook
// TODO test if data-component=false -> no attribute rendered (should be! see: https://stackoverflow.com/a/31164090)
// TODO readd hoverMenu behaviour:
// {{#if ../modules.base.molecules.nav-main.open-on-hover}}data-open-on-hover=""{{/if}}
export const NavMain: FunctionComponent<any> = ({ 'main-nav': mainNav }) => (
  <div className="nav-main__wrap">
    <NavToggle
      id="toggle-sidebar"
      controls-id="nav-main"
      class="nav-main-toggle"
    />
    <nav
      className="nav-main"
      id="nav-main"
      aria-label="Hauptnavigation"
      data-component="base.nav-main"
    >
      <ul className="nav-main__list--level-1">
        {mainNav &&
          mainNav.map((navEntry, index) => (
            <li
              className={classnames(
                'nav-main__item',
                'nav-main__item--level-1',
                navEntry.active && 'nav-main__item--active'
              )}
              data-component={navEntry.dropdown ? 'base.dropdown' : false}
              data-close-on-blur={navEntry.dropdown ? '' : false}
              key={`nav-main-level1-${index}`}
            >
              {navEntry.dropdown ? (
                <details>
                  <summary>
                    <div className="nav-main__item__link">
                      {navEntry.label}
                      <Icon
                        icon="chevron-down"
                        role="img"
                        class="nav-main__icon"
                      />
                    </div>
                  </summary>
                  <ul className="nav-main__list--level-2">
                    {navEntry.dropdown.map((dropdownEntry, dropdownIndex) => (
                      <li
                        className={classnames(
                          'nav-main__item--level-2',
                          dropdownEntry.current && 'nav-main__item--current',
                          dropdownEntry.active && 'nav-main__item--active'
                        )}
                        key={`nav-main-level2-${dropdownIndex}`}
                      >
                        <Link
                          href="#"
                          className="nav-main__item__link"
                          tabIndex={0}
                        >
                          {dropdownEntry.label}
                          {dropdownEntry.dropdown && (
                            <Icon
                              icon="chevron-right"
                              role="img"
                              class="nav-main__icon"
                            />
                          )}
                        </Link>
                        {dropdownEntry.dropdown && (
                          <ul className="nav-main__list--level-3">
                            {dropdownEntry.dropdown.map(
                              (dropdownSubEntry, dropdownSubIndex) => (
                                <li
                                  className={classnames(
                                    'nav-main__item--level-3',
                                    dropdownSubEntry.current &&
                                      'nav-main__item--current',
                                    dropdownSubEntry.active &&
                                      'nav-main__item--active'
                                  )}
                                  key={`nav-main-level3-${dropdownSubIndex}`}
                                >
                                  <Link
                                    href="#"
                                    className="nav-main__item__link"
                                    tabIndex={0}
                                  >
                                    {dropdownSubEntry.label}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link href="#" className="nav-main__item__link">
                  {navEntry.label}
                </Link>
              )}
            </li>
          ))}
      </ul>
    </nav>
  </div>
);

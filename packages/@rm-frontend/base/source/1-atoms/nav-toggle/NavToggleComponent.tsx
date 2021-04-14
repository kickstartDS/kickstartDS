import { FunctionComponent } from 'react';
import classnames from 'classnames';
import './nav-toggle.css';
// TODO add schema / storybook
// TODO readd id: id="{{id}}"
// TODO readd functionality to aria controls: aria-controls="{{controls-id}}"
// TODO readd data-component: data-component="{{default component 'base.nav-toggle'}}"
export const NavToggle: FunctionComponent<any> = ({
  id,
  className,
  'controls-id': controlsId,
}) => (
  <button
    type="button"
    className={classnames('nav-toggle', className)}
    id={id}
    aria-controls={controlsId}
    aria-expanded="false"
    data-component="base.nav-toggle"
  >
    <span className="nav-toggle__label">Navigation öffnen/schließen</span>
    <div className="nav-toggle__icon">
      <div className="nav-toggle__icon__middle"></div>
    </div>
  </button>
);

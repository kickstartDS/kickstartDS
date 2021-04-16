import NavToggle from '../../1-atoms/nav-toggle/NavToggle';
import { actions as sidebarActions } from './Sidebar.desc';

export default class SidebarToggle extends NavToggle {
  static identifier = 'base.sidebar-toggle';

  static actions = {
    close: `${SidebarToggle.identifier}.close`,
  };

  open() {
    super.open();
    window.rm.radio.emit(sidebarActions.showOverlay);
  }

  close() {
    super.close();
    window.rm.radio.emit(sidebarActions.hideOverlay);
  }
}

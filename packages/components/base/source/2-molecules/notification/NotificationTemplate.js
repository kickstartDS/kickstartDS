import { html } from '../../0-base/1-tools/js/render';

export default ({ type, title, message }) => html`
  <div
    class="notification ${`notification--${type}`}"
    role="alertdialog"
    data-component="base.notification"
    style="height: 0;"
  >
    <div class="notification__content" role="document" tabindex="0">
      ${title ? html`<h3>${title}</h3>` : ''}
      <div>${html([message])}</div>
    </div>
  </div>
`;

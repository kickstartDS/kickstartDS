import { html } from '../../0-base/1-tools/js/render';

export default ({ icon, className = '', role = '' }) => html`
  <svg class="icon ${className}" role="${role}">
    <use
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xlink:href="${icon ? `#icon-${icon}` : ''}"
    ></use>
  </svg>
`;

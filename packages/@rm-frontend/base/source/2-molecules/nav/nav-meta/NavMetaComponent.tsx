import { FunctionComponent } from 'react';
import { Icon } from '../../../1-atoms/icon';
import './nav-meta.scss';

// TODO add schema / storybook
// TODO add dynamic data / props
// TODO readd real-estate: {{#if modules.real-estate}}
// TODO readd extranet: {{#if modules.extranet}}
// TODO readd nav-lang: {{#if modules.base.molecules.nav-lang}}
export const NavMeta: FunctionComponent = () => (
  <div className="nav-meta__list">
    <ul
      className="nav-meta__list__item"
      id="nav-meta__contact"
      role="contentinfo"
      aria-label="Schneller Kontakt zu uns"
    >
      <li>
        <a href="tel:00492211234560" title="Unsere Telefon-Nummer">
          <meta itemProp="telephone" content="00492211234560" />
          <Icon icon="phone" role="img" class="nav-meta__icon" />
          +49 (0)221 12 34 56-0
        </a>
      </li>
      <li>
        <a
          href="mailto:mail@domainname.de"
          title="Unsere Email-Adresse"
          itemProp="email"
        >
          <Icon icon="email" role="img" class="nav-meta__icon" />
          info@25sheepstreet.com
        </a>
      </li>
    </ul>
  </div>
);

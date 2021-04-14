import { FunctionComponent } from 'react';
import { Icon } from '../../1-atoms/icon/IconComponent';
import { Link } from '../../1-atoms/link/LinkComponent';
import './footer.css';

// TODO readd scroll-to-top: {{> atoms-scroll-to-top }}
// TODO readd search-overlay: {{try "organisms-search-overlay"}}
// TODO clean footerTelephone formats for html attributes
// TODO get dynamic data for footer
// TODO add schema / storybook
// TODO readd `itemScope=""` on `<address>`
// TODO readd `content={footerTelephone}` on `footerTelephone > a`
// TODO change props to camelCase
export const Footer: FunctionComponent<any> = ({
  'footer-telephone': footerTelephone,
  'footer-email': footerEmail,
  'footer-name': footerName,
  'footer-street-address': footerStreetAddress,
  'footer-postal-code': footerPostalCode,
  'footer-address-locality': footerAddressLocality,
  'footer-address-country': footerAddressCountry,
}) => (
  <footer className="main-footer">
    <div className="l-main-wrap">
      <div className="main-footer__top">
        <address
          className="main-footer__address"
          itemProp="address"
          itemType="http://schema.org/PostalAddress"
          id="microdata-org-address"
        >
          {((footerTelephone && footerTelephone.length > 0) ||
            (footerEmail && footerEmail.length > 0) ||
            (footerName && footerName.length > 0)) && (
            <p>
              {footerName && footerName.length > 0 && (
                <>
                  <span
                    itemProp="name"
                    className="main-footer__address__company"
                  >
                    {footerName}
                  </span>
                  <br />
                </>
              )}
              {footerTelephone && footerTelephone.length > 0 && (
                <>
                  <a
                    href={`tel:${footerTelephone}`}
                    title="Unsere Telefon-Nummer"
                    itemProp="telephone"
                    className="main-footer__tel"
                  >
                    {footerTelephone}
                  </a>
                  <br />
                </>
              )}
              {footerEmail && footerEmail.length > 0 && (
                <a
                  href={`mailto:${footerEmail}`}
                  title={footerEmail}
                  itemProp="email"
                >
                  {footerEmail}
                </a>
              )}
            </p>
          )}

          {footerStreetAddress && footerStreetAddress.length > 0 && (
            <>
              <span itemProp="streetAddress">{footerStreetAddress}</span>
              <br />
            </>
          )}
          {footerPostalCode && footerPostalCode.length > 0 && (
            <>
              <span itemProp="postalCode">{footerPostalCode}</span>
              &nbsp;
            </>
          )}
          {footerAddressLocality && footerAddressLocality.length > 0 && (
            <>
              <span itemProp="addressLocality">{footerAddressLocality}</span>
              <br />
            </>
          )}
          {footerAddressCountry && footerAddressCountry.length > 0 && (
            <span itemProp="addressCountry">{footerAddressCountry}</span>
          )}
        </address>

        <nav className="nav-footer" aria-label="Rechtliches">
          <ul className="nav-footer__list">
            <li className="nav-footer__list__item">
              <Link href="#">Kontakt</Link>
            </li>
            <li className="nav-footer__list__item">
              <Link href="#">Impressum</Link>
            </li>
            <li className="nav-footer__list__item">
              <Link href="#">Datenschutz</Link>
            </li>
            <li className="nav-footer__list__item">
              <Link href="#">Sitemap</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-footer__bottom">
        <nav
          className="nav-social"
          aria-label="Unsere Profile in sozialen Netzwerken"
        >
          <ul className="nav-social__list" id="microdata-org-social">
            <li className="nav-social__list__item">
              <a href="#" title="Unsere Facebook-Seite" itemProp="sameAs">
                <Icon icon="facebook" role="img" />
              </a>
            </li>
            <li className="nav-social__list__item">
              <a href="#" title="Unsere Instagram-Seite" itemProp="sameAs">
                <Icon icon="instagram" role="img" />
              </a>
            </li>
            <li className="nav-social__list__item">
              <a href="#" title="Unser Twitter-Profil" itemProp="sameAs">
                <Icon icon="twitter" role="img" />
              </a>
            </li>
            <li className="nav-social__list__item">
              <a href="#" title="Unser Youtube-Profil" itemProp="sameAs">
                <Icon icon="youtube" role="img" />
              </a>
            </li>
            <li className="nav-social__list__item">
              <a href="#" title="Unser xing-Profil" itemProp="sameAs">
                <Icon icon="xing" role="img" />
              </a>
            </li>
            <li className="nav-social__list__item">
              <a href="#" title="Unser linkedin-Profil" itemProp="sameAs">
                <Icon icon="linkedin" role="img" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

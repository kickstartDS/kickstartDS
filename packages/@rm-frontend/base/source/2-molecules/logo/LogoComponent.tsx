import { FunctionComponent } from 'react';
import { Link } from '../../1-atoms/link/LinkComponent';
import { Picture } from '../../1-atoms/image/PictureComponent';

// TODO add schema / storybook
// TODO add dynamic data / props
/*
  logo: {
    alt: '25SheepStreet Logo',
    width: '430',
    height: '84',
    src: {
      default: 'logo.svg',
      'transparent-header': 'logo-light.svg'
    }
  },
*/
export const Logo: FunctionComponent = () => (
  <div className="logo-main-wrap">
    <meta itemProp="name" content="Sheepstreet 25" />
    <Link itemProp="url" href="#" className="logo-main" title="Startseite">
      <Picture
        src="/logo-dark.svg"
        itemProp="logo"
        data-src="logo.svg"
        alt="25SheepStreet Logo"
        width={430}
        height={84}
        lazy={false}
      />
    </Link>
  </div>
);

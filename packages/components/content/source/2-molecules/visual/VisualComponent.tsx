import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Icon } from '@kickstartds/base/lib/icon';
import { VisualProps } from './VisualProps';
import { VisualMediaPartial } from './VisualMediaPartial';
import { VisualBoxPartial } from './VisualBoxPartial';
import './visual.scss';
import './Visual.js';

export const Visual: FunctionComponent<VisualProps> = ({
  media,
  box,
  overlay,
  backgroundColor,
  inbox,
  height,
  skipButton,
  className,
}) => (
  <div
    data-component="visual"
    className={classnames(
      'visual',
      {
        'visual--full': height === 'fullScreen',
        'visual--small': height === 'small',
        'visual--no-crop': height === 'fullImage',
      },
      className
    )}
    style={{ backgroundColor }}
  >
    {media && <VisualMediaPartial {...{ ...media, inbox }} />}
    {overlay && <div className="visual__overlay"></div>}
    {box?.enabled && <VisualBoxPartial {...{ ...box, inbox }} />}

    {skipButton && (
      <div className="visual__continue">
        <button type="button" className="visual__continue-btn">
          <Icon icon="chevron-down" />
        </button>
      </div>
    )}
  </div>
);

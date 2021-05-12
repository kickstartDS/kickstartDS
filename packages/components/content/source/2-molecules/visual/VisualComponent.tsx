import {
  FunctionComponent,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { Icon } from '@kickstartds/base/lib/icon';
import { VisualProps } from './VisualProps';
import { VisualMediaPartial } from './VisualMediaPartial';
import {
  RenderFunctions as BoxRenderFunctions,
  VisualBoxPartial,
} from './VisualBoxPartial';
import './visual.scss';
import './Visual.js';

const VisualComponent: FunctionComponent<
  VisualProps & { box?: BoxRenderFunctions } & HTMLAttributes<HTMLDivElement>
> = ({
  media,
  box,
  overlay,
  backgroundColor,
  inbox,
  height,
  skipButton,
  className,
  ...props
}) => (
  <div
    data-component="visual"
    className={classnames(
      'c-visual',
      {
        'c-visual--full': height === 'fullScreen',
        'c-visual--small': height === 'small',
        'c-visual--no-crop': height === 'fullImage',
      },
      className
    )}
    style={{ backgroundColor }}
    {...props}
  >
    {media && <VisualMediaPartial {...{ ...media, inbox, overlay }} />}
    {box?.enabled && <VisualBoxPartial {...{ ...box, inbox }} />}

    {skipButton && (
      <div className="c-visual__continue">
        <button type="button" className="c-visual__continue-btn">
          <Icon icon="chevron-down" />
        </button>
      </div>
    )}
  </div>
);

export const VisualContextDefault = VisualComponent;
export const VisualContext = createContext(VisualContextDefault);
export const Visual: typeof VisualContextDefault = (props) => {
  const Component = useContext(VisualContext);
  return <Component {...props} />;
};

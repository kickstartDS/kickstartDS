import { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Icon } from '@kickstartds/base/lib/icon';
import type { VisualProps as VisualSchemaProps } from './VisualProps';
import { VisualMediaPartial } from './VisualMediaPartial';
import {
  RenderFunctions as BoxRenderFunctions,
  VisualBoxPartial,
} from './VisualBoxPartial';

export type VisualProps = VisualSchemaProps & { box?: BoxRenderFunctions };
export const VisualComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  VisualProps & HTMLAttributes<HTMLDivElement>
> = (
  {
    media,
    box,
    overlay,
    backgroundColor,
    inbox = false,
    height = 'default',
    skipButton = false,
    className,
    component = 'content.visual',
    ...props
  },
  ref
) => (
  <div
    ks-component={component}
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
    ref={ref}
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

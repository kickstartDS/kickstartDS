import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { ButtonGroupComponent } from './ButtonGroupComponent';
import './button-group.scss';

export const ButtonGroupContextDefault = forwardRef(ButtonGroupComponent);
export const ButtonGroupContext = createContext(ButtonGroupContextDefault);
export const ButtonGroup = withContainer('button-group', ButtonGroupContext);

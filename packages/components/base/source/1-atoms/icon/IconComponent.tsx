import { createContext, useContext, createElement } from 'react';
import './icon.scss';
import { Icon as IconComponent } from './PureIconComponent';

export const IconContextDefault = IconComponent;
export const IconContext = createContext(IconContextDefault);
export const Icon: typeof IconContextDefault = (props) =>
  createElement(useContext(IconContext), props);

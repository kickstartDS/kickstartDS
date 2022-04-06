import { forwardRef, createElement, createContext, useContext } from 'react';
import { SectionComponent, SectionProps } from './SectionComponent';
import './section.scss';

export const SectionContextDefault = forwardRef(SectionComponent);
export const SectionContext = createContext(SectionContextDefault);
export const Section: typeof SectionContextDefault = forwardRef((props, ref) =>
  createElement(useContext(SectionContext), { ...props, ref })
);
export { SectionProps };

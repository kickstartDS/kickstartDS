import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { SectionComponent } from './SectionComponent';
import './section.scss';
import './Section.js';

export { defaultIconRenderFn } from './SectionComponent';
export const SectionContextDefault = forwardRef(SectionComponent);
export const SectionContext = createContext(SectionContextDefault);
export const Section = withContainer('section', SectionContext);

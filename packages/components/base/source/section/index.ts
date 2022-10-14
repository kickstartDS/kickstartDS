import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/lib/container';
import { SectionComponent } from './SectionComponent';
import type { SectionProps } from './SectionComponent';
import './section.scss';

export const SectionContextDefault = forwardRef(SectionComponent);
export const SectionContext = createContext(SectionContextDefault);
export const Section = withContainer('section', SectionContext);
export { SectionProps };

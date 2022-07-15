import { forwardRef, createContext } from 'react';
import { withContainer } from '@kickstartds/core/container';
import { SectionComponent, type SectionProps } from './SectionComponent';
import './section.scss';

export const SectionContextDefault = forwardRef(SectionComponent);
export const SectionContext = createContext(SectionContextDefault);
export const Section = withContainer('section', SectionContext);
export { SectionProps };

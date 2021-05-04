import { ReactNode } from 'react';

export type renderFn = (t: ReactNode) => ReactNode;
export type renderTextFn = (t: string) => ReactNode;
export const defaultRenderFn: renderFn = (t) => t;

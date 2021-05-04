import { ReactNode } from 'react';

export type renderFn = (t: ReactNode) => ReactNode;
export const defaultRenderFn: renderFn = (t) => t;

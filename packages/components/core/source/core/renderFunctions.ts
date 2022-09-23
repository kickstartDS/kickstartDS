import { ReactNode } from 'react';

type renderFn = (t: ReactNode) => ReactNode;
export const defaultRenderFn: renderFn = (t) => t;

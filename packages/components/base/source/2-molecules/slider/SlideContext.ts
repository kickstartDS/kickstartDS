import { createContext } from 'react';

export type slideContextType = {
  index: number;
  first: boolean;
  last: boolean;
} | null;

export const SlideContext = createContext<slideContextType>(null);

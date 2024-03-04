import { useRef, DependencyList, useEffect, ForwardedRef } from 'react';

export const useKsComponent = <R extends HTMLElement = HTMLDivElement>(
  identifier: string,
  ref?: ForwardedRef<R>,
  deps?: DependencyList
) => {
  const innerRef = useRef<R>(null);
  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(innerRef.current);
      } else {
        ref.current = innerRef.current;
      }
    }
    return () =>
      innerRef.current && innerRef.current.removeAttribute('data-uid');
  }, deps);

  return { 'ks-component': identifier, ref: innerRef };
};

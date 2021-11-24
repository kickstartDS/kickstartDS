import {
  createElement,
  Context,
  FunctionComponentElement,
  ProviderProps,
} from 'react';

export const createProvider =
  <V>(context: Context<V>, value: V) =>
  (props: ProviderProps<V>): FunctionComponentElement<ProviderProps<V>> =>
    createElement(context.Provider, { ...props, value });

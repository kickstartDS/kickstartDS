import {
  forwardRef,
  createElement,
  createContext,
  useContext,
  type ForwardRefExoticComponent,
  type ForwardedRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
  type PropsWithoutRef,
  type RefAttributes,
  type Context,
} from 'react';
import './container.scss';
import './Container.js';
import { ContainerComponent, type ContainerProps } from './ContainerComponent';

export { ContainerProps };
export const ContainerContextDefault = forwardRef(ContainerComponent);
export const ContainerContext = createContext(ContainerContextDefault);
export const Container: typeof ContainerContextDefault = forwardRef(
  (props, ref) => createElement(useContext(ContainerContext), { ...props, ref })
);

export const withContainer = <
  C extends ForwardRefExoticComponent<any>,
  T = ElementRef<C>,
  P = ComponentPropsWithoutRef<C>
>(
  name: string,
  context: Context<C>
): ForwardRefExoticComponent<
  PropsWithoutRef<P & { container?: ContainerProps }> & RefAttributes<T>
> =>
  forwardRef(
    (
      {
        container = {},
        ...props
      }: P & {
        container?: ContainerProps;
      },
      ref: ForwardedRef<T>
    ) =>
      createElement(
        Container,
        { ...container, name },
        createElement(useContext(context), { ...props, ref })
      )
  );

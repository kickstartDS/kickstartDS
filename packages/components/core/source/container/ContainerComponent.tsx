import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
  ForwardRefExoticComponent,
  ForwardedRef,
  ElementRef,
  ComponentPropsWithoutRef,
  PropsWithoutRef,
  RefAttributes,
  Context,
} from 'react';
import classnames from 'classnames';
import './container.scss';
import './Container.js';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  name?: string;
};

const ContainerComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  ContainerProps
> = ({ name, className, ...props }, ref) => (
  <div
    data-component="base.container"
    className={classnames(
      'l-container',
      name && `l-container--${name}`,
      className
    )}
    ref={ref}
    {...props}
  />
);

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

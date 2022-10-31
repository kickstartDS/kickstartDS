import { createElement, useMemo, useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

export const InvertedDecorator = (Story, context) => {
  const darkMode = useDarkMode();
  const bgValues = useMemo(
    () =>
      Object.fromEntries(
        context.parameters.backgrounds.values.map(({ name, value }) => [
          value,
          name,
        ])
      ),
    context.parameters.backgrounds.values
  );
  const background =
    bgValues[context.globals.backgrounds?.value] ??
    (darkMode ? 'dark' : 'light');

  useEffect(
    () => document.body.setAttribute('ks-inverted', background === 'dark'),
    [background]
  );
  return createElement(Story);
};

import { createElement, useMemo, useEffect, FunctionComponent } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

interface StoryProps {
  // Define the types for the props of your Story component here
}

interface Context {
  parameters: {
    backgrounds: {
      values: Array<{ name: string; value: string }>;
    };
  };
  globals: {
    backgrounds?: {
      value?: string;
    };
  };
}

export const InvertedDecorator = (
  Story: FunctionComponent<StoryProps>,
  context: Context
) => {
  const darkMode = useDarkMode();
  const bgValues = useMemo(
    () =>
      Object.fromEntries(
        context.parameters.backgrounds.values.map(({ name, value }) => [
          value,
          name,
        ])
      ),
    [context.parameters.backgrounds.values]
  );
  const background =
    bgValues[context.globals.backgrounds?.value] ??
    (darkMode ? 'dark' : 'light');

  useEffect(
    () =>
      document.body.setAttribute(
        'ks-inverted',
        background === 'dark' ? 'true' : 'false'
      ),
    [background]
  );
  return createElement(Story);
};

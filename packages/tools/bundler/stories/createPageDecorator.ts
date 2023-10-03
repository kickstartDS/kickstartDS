import { createElement, Fragment, useMemo, useEffect, FC } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

interface IconSpriteProps {
  key: string;
}

export const createPageDecorator =
  (IconSprite: FC<IconSpriteProps>) => (Story: FC) =>
    createElement(Fragment, null, [
      createElement(IconSprite, { key: 'IconSprite' }),
      createElement(Story, { key: 'Story' }),
    ]);

export const InvertedDecorator = (Story: FC, context: any) => {
  const darkMode = useDarkMode();
  const bgValues = useMemo(
    () =>
      Object.fromEntries(
        context.parameters.backgrounds.values.map(
          ({ name, value }: { name: string; value: string }) => [value, name]
        )
      ),
    context.parameters.backgrounds.values
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

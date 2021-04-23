// @see: https://github.com/hipstersmoothie/storybook-dark-mode/issues/127#issuecomment-802018811
import React from 'react';
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();

  return (
    <BaseContainer
      context={{
        ...context,
        parameters: {
          ...context.parameters,
          docs: {
            // This is where the magic happens.
            theme: dark ? themes.dark : themes.light,
          },
        },
      }}
    >
      {children}
    </BaseContainer>
  );
};

/* eslint-disable import/no-unresolved */
import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import { useColorMode } from '@docusaurus/theme-common';
import { ThemeProvider, themes, convert } from '@storybook/theming';
import useGlobalData from '@docusaurus/useGlobalData';

const lightTheme = convert(themes.light);
const darkTheme = convert(themes.dark);

export default function MDXContentWrapper(props) {
  const { colorMode } = useColorMode();

  return (
    <div ks-inverted={(colorMode === 'dark').toString()}>
      <ThemeProvider theme={colorMode === 'dark' ? darkTheme : lightTheme}>
        <MDXContent {...props} />
      </ThemeProvider>
    </div>
  );
}

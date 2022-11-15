/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  spacing: {
    none: '0px',
    xxs: 'var(--ks-spacing-xxs)',
    xs: 'var(--ks-spacing-xs)',
    sm: 'var(--ks-spacing-s)',
    md: 'var(--ks-spacing-m)',
    lg: 'var(--ks-spacing-l)',
    xl: 'var(--ks-spacing-xl)',
    xxl: 'var(--ks-spacing-xxl)',
  },
};

export const BedrockProvider = (props) => (
  <ThemeProvider theme={theme} {...props} />
);

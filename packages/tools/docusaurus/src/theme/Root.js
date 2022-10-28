/* eslint-disable no-unused-vars */
import React from 'react';
import { IconSprite } from '@kickstartds/design-system/dist/components/icon-sprite/IconSpriteComponent';
import { BedrockProvider } from '../components/bedrock/BedrockProvider';

const Root = ({ children }) => (
  <BedrockProvider>
    <IconSprite />
    {children}
  </BedrockProvider>
);

export default Root;

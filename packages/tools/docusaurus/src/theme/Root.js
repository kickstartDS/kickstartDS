/* eslint-disable no-unused-vars */
import React from 'react';
import { BedrockProvider } from '../components/bedrock/BedrockProvider';

const Root = ({ children }) => <BedrockProvider>{children}</BedrockProvider>;

export default Root;

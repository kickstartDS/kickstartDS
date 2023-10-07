import path from 'path';
import fs from 'fs-extra';
import fg from 'fast-glob';
import { capitalCase } from 'change-case';
import { toArray } from 'react-emoji-render';
import { ReactElement } from 'react';
import { root } from '../utils/utils.js';

interface TemplateOptions {
  title: string;
  content: string;
}

const template = ({ title, content }: TemplateOptions): string => `
import { Meta } from '@storybook/blocks';

<Meta title="${title}" />

${content}
`;

const parseEmojis = (value: string): string => {
  const emojisArray = toArray(value);

  const newValue = emojisArray.reduce((previous, current) => {
    if (typeof current === 'string') {
      return previous + current;
    }
    return previous + (current as ReactElement).props.children;
  }, '');

  return newValue;
};

const createStoriesFromMarkdown = async (
  modPath: string,
  mod: string
): Promise<void> => {
  const filePaths = await fg(`${modPath}/*.md`, {
    cwd: root,
    absolute: true,
    ignore: ['**/node_modules'],
  });
  filePaths.forEach(async (filePath) => {
    const content = await fs.readFile(filePath);
    const name = path.basename(filePath, '.md');
    const options: TemplateOptions = {
      title: `${capitalCase(mod)}/${capitalCase(name)}`,
      content: parseEmojis(
        content.toString().replace(/<\/a>(\r\n|\r|\n)#\s/g, '</a>\n\n# ')
      ),
    };
    return fs.outputFile(
      `${modPath}/storybook-tmp/${name}.mdx`,
      template(options)
    );
  });
};

export default createStoriesFromMarkdown;

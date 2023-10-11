import path from 'path';
import fs from 'fs-extra';
import { extract } from 'custom-property-extract';

const createTokens = (dest: string, css: string): Promise<void> => {
  const dir = path.dirname(dest);
  const base = `${path.basename(dest, '.css')}-tokens.json`;
  const tokens = extract(css, { source: 'content', mode: 'full' });
  return fs.outputJson(`${dir}/${base}`, tokens, { spaces: 2 });
};

export { createTokens };

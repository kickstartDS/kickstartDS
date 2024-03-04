import path from 'path';
import findup from 'find-up';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let rootPath: string;

try {
  rootPath = path.dirname(findup.sync('lerna.json', { cwd: __dirname }) || '');
} catch (e) {
  rootPath = process.cwd();
}

export const dirRe = /.+\/(.+)\/(.+)\.(.+)$/;
export const sourcePath = `${process.cwd()}/source`;
export const root = rootPath;

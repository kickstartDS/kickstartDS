import fs from 'fs-extra';
import fg from 'fast-glob';

const glob: string = 'source/**/*stories.mdx';

const copy = async (): Promise<void[]> => {
  const paths: string[] = await fg(glob);
  return Promise.all(
    paths.map((src: string) => {
      const dest: string = src.replace('source', 'lib');
      return fs.copy(src, dest);
    })
  );
};

export { copy };

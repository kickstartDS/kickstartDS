import combineDuplicatedSelectors from 'postcss-combine-duplicated-selectors';
import sortMediaQueries from 'postcss-sort-media-queries';
import sortContainerQueries from 'postcss-sort-container-queries';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { AcceptedPlugin } from 'postcss';

const dev: AcceptedPlugin[] = [
  sortMediaQueries(),
  sortContainerQueries(),
  combineDuplicatedSelectors(),
  autoprefixer(),
];
const prod: AcceptedPlugin[] = [
  ...dev,
  cssnano({ preset: ['default', { calc: false }] }),
];

export default process.env.NODE_ENV === 'production' ? prod : dev;

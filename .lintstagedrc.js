import path from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

export default {
  'src/**/*.{ts, tsx}': [
    buildEslintCommand
  ],
  'package.json': 'sort-package-json'
};

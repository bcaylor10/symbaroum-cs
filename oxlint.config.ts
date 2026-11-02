import { defineConfig } from 'oxlint';
import solidV2 from 'eslint-plugin-solid/configs/v2';

export default defineConfig({
  jsPlugins: ['eslint-plugin-solid'],
  ignorePatterns: ['**/*.gen.*', 'dist'],
  settings: solidV2.settings,
  rules: {
    ...solidV2.rules,
    'solid/style-prop': 'off',
    'solid/no-react-specific-props': 'error',
  },
});

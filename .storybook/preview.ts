import type { Preview } from '@storybook/vue3';
import '../src/styles/_custom.scss';
import { themes } from '@storybook/theming';

export const parameters = {
  docs: {
    theme: themes.dark,
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

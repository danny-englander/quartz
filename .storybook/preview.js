/** @type { import('@storybook/server').Preview } */
const preview = {
  globals: {
    drupalTheme: 'fortuna',
    supportedDrupalThemes: {
      fortuna: { title: 'fortuna' },
    },
  },
  parameters: {
    server: {
      // Replace this with your Drupal site URL, or an environment variable.
      url: 'http://fortuna.lndo.site',
    },
    actions: {
      argTypesRegex: "^on[A-Z].*"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

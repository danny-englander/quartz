/** @type { import('@storybook/server').Preview } */
const preview = {
  globals: {
    drupalTheme: 'quartz',
    supportedDrupalThemes: {
      quartz: { title: 'quartz' },
    },
  },
  parameters: {
    server: {
      // Replace this with your Drupal site URL, or an environment variable.
      url: 'http://quartz.lndo.site',
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

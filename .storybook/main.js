/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(json|yml)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@lullabot/storybook-drupal-addon',
  ],
  framework: {
    name: "@storybook/server-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
};
export default config;

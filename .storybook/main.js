const TerserPlugin = require('terser-webpack-plugin');
// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config, { configType }) => {
    // watch:storybook > configType === 'DEVELOPMENT'
    // build:storybook > configType === 'PRODUCTION'
    //    object { amd?, bail?, cache?, context?, dependencies?, devServer?, devtool?, entry?, externals?, infrastructureLogging?, loader?, mode?
    //    ,module?, name?, node?, optimization?, output?, parallelism?, performance?, plugins?, profile?, recordsInputPath?, recordsOutputPath?, re
    //    cordsPath?, resolve?, resolveLoader?, serve?, stats?, target?, watch?, watchOptions? }
    // config.plugins.push();
    // console.log(config.plugins);
    // set sourcemap to false
    config.optimization.minimizer = [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          mangle: false,
          keep_fnames: true,
        },
      }),
    ];
    return config;
  },
};

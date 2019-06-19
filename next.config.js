const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = withTypescript({
  webpack(config, options) {
    config.resolve.alias['src'] = './src';

    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    return config;
  }
});

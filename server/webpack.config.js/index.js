var webpackMerge = require('webpack-merge');

var baseConfig = require('./webpack.base.config');
var developmentConfig = require('./webpack.development.config');
var productionConfig = require('./webpack.production.config');

var environmentConfig = {};

switch (process.env.NODE_ENV) {
  case 'production':
    environmentConfig = webpackMerge(baseConfig, productionConfig);
    break;
  default:
    environmentConfig = webpackMerge(baseConfig, developmentConfig);
}

module.exports = environmentConfig;

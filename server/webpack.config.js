var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

/* helper function to get into build directory */
var distPath = function ( name ) {
  if ( undefined === name ) {
    return path.join('dist');
  }

  return path.join('dist', name);
};

var webpack_opts = {
  entry: './src/main.ts',
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate        : '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.json'
    ],
    modules: [
      'node_modules',
      'src',
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        test: /\.ts$/,
        ts: {
          compiler: 'typescript',
          configFileName: 'tsconfig.json'
        },
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [
     {
       enforce: 'pre',
       test: /\.js$/,
       loader: 'source-map-loader',
       exclude: /node_modules/
     },
     {
       enforce: 'pre',
       test: /\.ts?$/,
       use: 'source-map-loader',
       exclude: /node_modules/
     },
     {
       test: /\.ts$/,
       loaders: 'awesome-typescript-loader'
      //  ,exclude: /node_modules/
     },
     {
       test: /\.json$/,
       use: 'json-loader'
     }
   ]
  }
  // ,
  // externals: [nodeExternals()]
};

module.exports = webpack_opts;

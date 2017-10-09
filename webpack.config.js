const path = require('path');
const webpack = require('webpack');
const glob = require('glob');

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  entry: ['./src/index.tsx'],
  output: { path: path.resolve(__dirname, 'dist'), filename: 'bundle.js' },
  devtool: IS_DEV ? 'inline-source-map' : '',

  module: {
    rules: [
      // use typescript
      { test: /\.tsx?$/, use: 'awesome-typescript-loader', exclude: /node_modlues/ },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
  ],
  
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  }
};

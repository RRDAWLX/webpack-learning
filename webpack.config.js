const path = require('path')
const CustomWebpackPlugin = require('./utils/custom-webpack-plugin')

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('./utils/custom-loader.js'),
            options: {}
          },
          {
            loader: path.resolve('./utils/another-loader.js'),
            options: {}
          },
        ]
      }
    ]
  },

  plugins: [
    new CustomWebpackPlugin()
  ]
}

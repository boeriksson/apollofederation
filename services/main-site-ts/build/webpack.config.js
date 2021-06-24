const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: {
    'main-site': {
      import: './src/fe/index.tsx',
      filename: 'main-site-ts.js',
      publicPath: '',
    }
  },
  output: {
    clean: true,
    filename: './dist/[name].js'
  },
  devServer: {
    compress: true,
    port: 8080,
    injectClient: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './build/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts, .tsx']
  },
}

module.exports = config

const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: {
    'main-site': {
      import: './src/fe/index.js',
      filename: 'main-site.js',
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
        test: /\.js$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './build/index.html'
    })
  ],
  resolve: {
    extensions: ['.js']
  },
}

module.exports = config

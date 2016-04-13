import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import AppCachePlugin from 'appcache-webpack-plugin'

const config = {
  entry: '../src/index.jsx',

  output: {
    path: __dirname + '/dist',
    publicPath: '../',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json",
      },
      {
        test: /\.jsx?$/,
        include: __dirname + "/src",
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss',
      },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),
    new AppCachePlugin({
      exclude: ['.htaccess']
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
}
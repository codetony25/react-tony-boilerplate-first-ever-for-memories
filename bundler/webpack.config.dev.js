import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = {
  entry: [
    'webpack-hot-middleware/bin/client',
    path.join(__dirname, 'src/index.jsx'),
  ],

  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  devtool: 'source-map',
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    contentBase: '../src'
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
    new webpack.HotModuleReplacementPlugin(),
  ],
}
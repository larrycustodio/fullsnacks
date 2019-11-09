const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => ({
  entry: path.resolve(__dirname, 'src', 'Main.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: env.production,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
})

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    context: path.join(__dirname, '/src'),

    entry: {
        javascript: './index'
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
    },
    
    resolve: {
        alias: {
          react: path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['.js', '.jsx']
      },
    
      module: {
        loaders: [
          //Add Babel loader
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader'],
          },
          {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]',
          },
        ]
      },
      devServer: {
        port: 3000,
        contentBase: './public',
        inline: true
      }
    };
    
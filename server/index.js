const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

const PORT = 3030

// Tells express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
)

// Serve the files on port 3000.
app.listen(PORT, function() {
  console.log(`Open app on http://localhost:${PORT}!\n`)
})

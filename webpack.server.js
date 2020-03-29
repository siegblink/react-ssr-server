const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // Inform webpack that we're building a bundle for Node.js
  // rather than for the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.js',

  // Tell webpack where to put the output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Tell webpack to not bundle any libraries that we output to the server
  // if that library exists in the node_modules directory
  externals: [webpackNodeExternals()],
}

module.exports = merge(baseConfig, config)

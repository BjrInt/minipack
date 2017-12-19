let wp = require('./webpack')
const webpack = require('webpack')

wp.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
]

wp.output.filename = 'lib.min.js'

module.exports = wp

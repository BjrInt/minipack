const path = require('path')

module.exports = {
  entry: './src/app.js',

  output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'lib.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  cache: true
}

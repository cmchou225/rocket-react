const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    __dirname + '/src/js/index.jsx'
  ],
  output: {
      path: __dirname + '/build',
      filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?/, 
        exclude: /node_modules/, 
        include: path.join(__dirname, 'src'),
        use: [
          { loader: "babel-loader" }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ],
        include: path.join(__dirname)
      }
    ]
  }
}
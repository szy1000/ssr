//服务器端 require('path')

//客户端 require('path')  // bundle.js
const path = require('path')
const {merge} = require('webpack-merge')
const config = require('./webpack.base')

const clientConfig = {
  entry: './src/client/index.jsx',
  mode: 'development',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.css?$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules:{
            localIdentName: '[name]_[local]_[hash:base64:5]'
          },
          importLoaders: 1,
        }
      }]
    }]
  },
  resolve: {
    extensions:['.js','.jsx','.json'],
  }
}

module.exports = merge(config, clientConfig)

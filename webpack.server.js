//服务器端 require('path')

//客户端 require('path')  // bundle.js
const path = require('path')
const {merge} = require('webpack-merge')
const config = require('./webpack.base')
const nodeExtensions = require('webpack-node-externals')

const serverConfig = {
  target: "node",
  entry: './src/server/index.jsx',
  mode: 'development',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.css?$/,
      use: ['isomorphic-style-loader', {
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
  externals: [ nodeExtensions() ],
  resolve: {
    extensions:['.js','.jsx','.json'],
  }
}


module.exports = merge(config, serverConfig)

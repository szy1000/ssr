//服务器端 require('path')

//客户端 require('path')  // bundle.js
const path = require('path')
const nodeExtensions = require('webpack-node-externals')

module.exports = {
  target: "node",
  entry: './src/server/index.jsx',
  mode: 'development',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  externals: [ nodeExtensions() ],
  module: {
    rules: [
      {
        test: /\.(js|x)/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react', 'stage-0', [
            'env', {
              targets: {
                browsers: ['last 2 versions']
              }
            }
          ]]
        }
      }
    ]
  },
  resolve: {
    extensions:['.js','.jsx','.json'],
  }
}

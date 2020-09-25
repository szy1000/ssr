//服务器端 require('path')

//客户端 require('path')  // bundle.js
const path = require('path')

module.exports = {
  entry: './src/client/index.jsx',
  mode: 'development',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'public')
  },
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

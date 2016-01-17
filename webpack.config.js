var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      './src/main.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
              loader: 'babel-loader',
              test: path.join(__dirname, 'src'),
              query: {
                presets: 'es2015',
              },
            }
        ]
    },
    plugins: [
      // Avoid publishing files when compilation fails
      new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true // Nice colored output
    },
    devtool: 'source-map'
};

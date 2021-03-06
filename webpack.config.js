var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
      port: 3000
    },
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3000/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, '../resources/static/js'),
        filename: 'client.min.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel?presets[]=react,presets[]=es2015']
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

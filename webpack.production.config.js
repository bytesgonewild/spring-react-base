var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
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
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};

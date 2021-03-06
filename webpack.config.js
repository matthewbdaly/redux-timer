var webpack = require('webpack');  
module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.woff2?$/, loader: "url-loader?limit=25000" },
            { test: /\.(eot|svg|ttf)?$/, loader: "file-loader" },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
};

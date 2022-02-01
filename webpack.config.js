const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: [
        '/src/js/app.js',
        '/src/scss/app.scss'
    ],
    output: {
        filename: "js/app.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [{
                loader: 'style-loader', // inject CSS to page
            }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        config: true,
                    },
                },// Run post css actions
            }, {
                loader: 'sass-loader' // compiles SASS to CSS
            }]
        },
        ],
    }, plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        })
    ]
};
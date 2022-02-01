const path = require("path");

module.exports = {
    mode: 'development',
    entry: ["./src/js/app.js",'./src/scss/app.scss'],
    output: {
        filename: "js/app.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/css/[name].css'
                        }
                    }, {
                        // inject CSS to page
                        loader: 'style-loader'
                    }, {
                        // translates CSS into CommonJS modules
                        loader: 'css-loader'
                    }, {
                        // Run postcss actions
                        loader: 'postcss-loader',
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    }, {
                        // compiles Sass to CSS
                        loader: 'sass-loader'
                    }]
            },
        ],
    },
};
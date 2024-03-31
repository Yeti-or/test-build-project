const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { DefinePlugin } = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
console.log('isProd', isProd);

module.exports = {
    entry: {
        index: './src/pages/index.js',
        feedback: './src/pages/feedback.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader'
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
    plugins: [
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'UPS': process.env.NODE_ENV,
            'VERSION': 42,
        })
    ].concat(isProd ? [new MiniCssExtractPlugin()] : [])
};
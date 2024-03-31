const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProd = process.env.NODE_ENV === "production";

console.log('isProd', isProd);

module.exports = {
    cache: false,
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
    plugins: [].concat(isProd ? [new MiniCssExtractPlugin()] : [])
};
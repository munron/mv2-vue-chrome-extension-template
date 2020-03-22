
// eslint-disable-next-line
const ExtensionReloader = require('webpack-extension-reloader');
// eslint-disable-next-line
const { VueLoaderPlugin } = require('vue-loader');
// eslint-disable-next-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line
const CopyWebpackPlugin = require('copy-webpack-plugin');
// eslint-disable-next-line
const path = require('path');


module.exports = {
    mode: 'development', // The plugin is activated only if mode is set to development
    watch: true,
    entry: {
        'content-script': './src/main.ts',
        background: './src/background/background.ts',
        popup: './src/popup/popup.ts',
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new ExtensionReloader({
            port: 9090, // Which port use to create the server
            reloadPage: true, // Force the reload of the page also
            entries: { // The entries used for the content/background scripts or extension pages
                contentScript: 'content-script',
                background: 'background',
                extensionPage: 'popup',
            },
        }),
        new CopyWebpackPlugin([
            { from: './manifest.json' },
            { from: './src/popup/index.html' },
            {
                context: 'src/icons',
                from: '*.png',
                to: path.resolve(__dirname, 'dist'),
            },
            {
                context: 'src/assets',
                from: '*.png',
                to: path.resolve(__dirname, 'dist'),
            },
        ]),
    ],
    resolve: {
        extensions: ['.ts', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    },
                },
            },
            {
                test: /\.vue$/,
                loaders: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.sass$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader?indentedSyntax'],
            },
        ],
    },
};

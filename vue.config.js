// eslint-disable-next-line @typescript-eslint/no-var-requires
const ExtensionReloader = require('webpack-extension-reloader');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyWebpackPlugin = require('copy-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  filenameHashing: false,
  productionSourceMap: true,
  configureWebpack: {
    mode: 'development', // The plugin is activated only if mode is set to development
    watch: true,
    entry: {
      'content-script': './src/main.ts',
      background: './src/background/background.js',
      popup: './src/popup/popup.ts',
    },
    plugins: [
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
    // ...
    ],
  },
};


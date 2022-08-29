const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(css|.module.css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.html$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'
        }
      },
    ]
  },
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new CleanWebpackPlugin()
  ],
};

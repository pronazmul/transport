const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'var',
    library: 'EntryPoint'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_SERVER_URL: JSON.stringify(process.env.REACT_APP_SERVER_URL),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
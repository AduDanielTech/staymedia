const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [],
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      // Add the Tailwind CSS package to the modules array
      path.resolve(__dirname, 'node_modules/tailwindcss'),
    ],
  },
};

module.exports = {
  context: __dirname + '/src',
  entry: "./app",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

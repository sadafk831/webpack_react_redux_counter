/**
 * Created by sadafkhan on 14/12/15.
 */

var webpack = require("webpack");

// returns a Compiler instance
webpack({
  // configuration
  context: __dirname,
  entry: "./index",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }

}, function(err, stats) {
  //callback
  //console.log(err);
});
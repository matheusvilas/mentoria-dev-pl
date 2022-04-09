const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].js?t=" + new Date().getTime(),
    chunkFilename: "[name]-chunk.js?t=" + new Date().getTime(),
    publicPath: "./",
    path: path.resolve(__dirname, "deploymentPackage"),
  },
};

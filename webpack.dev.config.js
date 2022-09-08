const common = require("./webpack.config.js");

module.exports = {
  ...common,
  mode: "development",
  devtool: "inline-source-map",
};

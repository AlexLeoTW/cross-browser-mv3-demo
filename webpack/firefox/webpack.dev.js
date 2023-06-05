const { merge } = require("webpack-merge");
const common = require("../webpack.common.js");
const firefox = require("./webpack.firefox.js");

module.exports = merge(common, firefox, {
  devtool: "inline-source-map",
  mode: "development",
});

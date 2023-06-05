const { merge } = require("webpack-merge");
const common = require("../webpack.common.js");
const chromium = require("./webpack.chromium.js");

module.exports = merge(common, chromium, {
  mode: "production",
});

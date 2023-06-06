const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "../../dist_chromium/js"),
    filename: "[name].js",
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "manifest.chromium.json",
          to: "../manifest.json",
          context: "manifest",
        },
      ],
    }),
  ],
};

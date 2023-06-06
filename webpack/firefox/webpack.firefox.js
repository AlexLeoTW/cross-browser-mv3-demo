const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "../../dist_firefox/js"),
    filename: "[name].js",
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "manifest.firefox.json",
          to: "../manifest.json",
          context: "manifest",
        },
      ],
    }),
  ],
};

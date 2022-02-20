const path = require("path");

module.exports = {
  mode: "development",
  entry: "./pkg/curriculum_bg.js",
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  experiments: {
    asyncWebAssembly: true,
  },
  target: "node",
};

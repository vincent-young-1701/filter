const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: "./src/index.tsx",
    devtool: "source-map",
    optimization: {
      minimizer: [
        new TerserJSPlugin({ extractComments: false }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.tsx,\.ts$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: argv.mode === "development",
              },
            },
            "css-loader",
          ],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".css"],
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
  };
};

import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
      chunkFilename: "css/[name].[hash:8].css",
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
}

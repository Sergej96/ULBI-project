import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: "file-loader",
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const babelLoader = {
    test: /\.m?(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [svgLoader, babelLoader, typescriptLoader, cssLoader, fileLoader];
}

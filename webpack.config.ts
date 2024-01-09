import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: "./src/index.tsx",
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  };
  const PORT = env.port || 3000;

  const config: Configuration = buildWebpackConfig({
    mode: env.mode || "development",
    paths: paths,
    port: PORT,
  });

  return config;
};
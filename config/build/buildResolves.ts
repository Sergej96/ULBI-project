import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolves(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], //чтобы не указывать расширения при импорте
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}

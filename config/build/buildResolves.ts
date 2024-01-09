import webpack from "webpack";

export function buildResolves(): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], //чтобы не указывать расширения при импорте
  };
}

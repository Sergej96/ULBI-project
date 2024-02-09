import { BuildPaths } from "../../config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, 'src'),
  };

module.exports = {
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
     }
}
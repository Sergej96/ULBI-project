/* eslint-disable no-param-reassign */
import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import buildCssLoader from '../build/loaders/buildCssLoader';
import buildSvgLoader from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        html: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule) => {
            if (
                rule
                && typeof rule !== 'string'
                && /svg/.test(rule.test as string)
            ) {
                return { ...rule, exclude: /\.svg/ };
            }

            return rule;
        });
    }

    config.module?.rules?.push(buildSvgLoader());
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    config.module?.rules?.push(buildCssLoader(true));

    return config;
};

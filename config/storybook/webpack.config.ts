import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve = config.resolve || {};
    config.resolve.modules = config.resolve.modules || [];
    config.resolve.modules.push(paths.src);
    config.resolve.extensions = config.resolve.extensions || [];
    config.resolve.extensions.push('.ts', '.tsx');

    config.module = config.module || { rules: [] };
    // eslint-disable-next-line no-param-reassign
    config.module.rules =
        config.module.rules?.map((rule) => {
            if (
                typeof rule === 'object' &&
                rule.test &&
                typeof rule.test === 'string' &&
                /svg/.test(rule.test)
            ) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        }) || [];

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoader(true));

    config.plugins = config.plugins || [];
    config.plugins.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: '',
        }),
    );

    return config;
};

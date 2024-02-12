import webpack from 'webpack';
import buildCssLoader from './loaders/buildCssLoader';
import buildSvgLoader from './loaders/buildSvgLoader';

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
    };

    const cssLoader = buildCssLoader(isDev);

    const babelLoader = {
        test: /\.m?(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            keyAsDefaultValue: true,
                            keyAsDefaultValueForDerivedKeys: false,
                            locales: ['en', 'ru'],
                            disableCache: true,
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                        },
                    ],
                ],
            },
        },
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [svgLoader, babelLoader, typescriptLoader, cssLoader, fileLoader];
}

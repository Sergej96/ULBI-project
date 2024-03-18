/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import path from 'path';

const config: Config = {
    clearMocks: true,
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    rootDir: '../../',
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>src'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, '__mocks__/svg.tsx'),
    },
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    globals: { __IS_DEV__: true },
};

export default config;

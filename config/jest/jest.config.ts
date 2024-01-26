/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['node_modules'],
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
  modulePaths:[
    '<rootDir>src'
  ],
  testMatch: ['<rootDir>src/**/*(*.)@(space|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests'],
};

export default config;

const { createDefaultConfig } = require('@open-wc/testing-karma');

module.exports = (config) => {
  config.set({
    ...createDefaultConfig(config),
    frameworks: ['mocha', 'chai'], // Mocha + Chai for tests
    files: [
      { pattern: 'test/**/*.test.js', type: 'module' }, // Update with your actual test path
    ],
    preprocessors: {
      '**/*.js': ['babel'], // Add babel preprocessing for JS files
    },
    babelPreprocessor: {
      options: {
        presets: ['@babel/preset-env'],
      },
    },
    reporters: ['progress'],
    browsers: ['ChromeHeadless', 'Safari'],
    singleRun: true, // Run tests once
    esm: {
      nodeResolve: true, // Use Node module resolution
    },
  });
};

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add nativewind support
config.transformer.babelTransformerPath = require.resolve('nativewind/metro-transformer');

module.exports = config;

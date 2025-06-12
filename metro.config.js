// metro.config.js
const { getDefaultConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

module.exports = wrapWithReanimatedMetroConfig(getDefaultConfig(__dirname));

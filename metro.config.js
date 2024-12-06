const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    alias: {
      config: path.resolve(__dirname, 'src/config'),
      components: path.resolve(__dirname, 'src/presentation/components'),
      routes: path.resolve(__dirname, 'src/presentation/routes'),
      screens: path.resolve(__dirname, 'src/presentation/screens'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

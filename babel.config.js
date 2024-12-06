module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          config: './src/config',
          core: './src/core',
          components: './src/presentation/components',
          routes: './src/presentation/routes',
          screens: './src/presentation/screens',
          util: './src/util',
        },
      },
    ],
  ],
};

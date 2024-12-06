const path = require('path');

module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['config', path.resolve(__dirname, 'src/config')],
          ['core', path.resolve(__dirname, 'src/core')],
          ['components', path.resolve(__dirname, 'src/presentation/components')],
          ['routes', path.resolve(__dirname, 'src/presentation/routes')],
          ['screens', path.resolve(__dirname, 'src/presentation/screens')],
          ['store', path.resolve(__dirname, 'src/presentation/store')],
          ['util', path.resolve(__dirname, 'src/util')],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};

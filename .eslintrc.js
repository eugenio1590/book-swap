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
          ['components', path.resolve(__dirname, 'src/presentation/components')],
          ['routes', path.resolve(__dirname, 'src/presentation/routes')],
          ['screens', path.resolve(__dirname, 'src/presentation/screens')],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};

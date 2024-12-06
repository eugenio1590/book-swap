import { MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#064ACB',
    secondary: '#F3A953',
    tertiary: '#F27370',
  },
};

export type AppTheme = typeof theme;
export default theme;

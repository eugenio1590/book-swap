import { MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#064ACB',
    secondary: '#F3A953',
    tertiary: '#F27370',
    surface: '#f6f5f3',
    onSurface: '#616161',
    onSurfaceVariant: '#B0B0B0',
  },
};

export type AppTheme = typeof theme;
export default theme;

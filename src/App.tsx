/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import theme from './config/theme';
import { MainNavigator } from './presentation/routes';

const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });

const App = () => {
  return (
    <PaperProvider theme={theme} settings={{
      icon: props => <FeatherIcon {...props} />,
    }}>
      <NavigationContainer theme={{...LightTheme, fonts: DefaultTheme.fonts}}>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

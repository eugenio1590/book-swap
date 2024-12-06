/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import 'react-native-gesture-handler';
import FeatherIcon from '@react-native-vector-icons/feather';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import { theme } from 'config';
import { MainNavigator } from 'routes';

const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });

const App = () => {
  return (
    <PaperProvider theme={theme} settings={{
      // @ts-ignore: 'name' is part of a global icon configuration and can have dynamic values.
      icon: props => <FeatherIcon {...props} />,
    }}>
      <NavigationContainer theme={{...LightTheme, fonts: DefaultTheme.fonts}}>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

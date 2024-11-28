/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider, Text } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';

const App = () => {
  return (
    <PaperProvider settings={{
      icon: props => <FeatherIcon {...props} />,
    }}>
      <NavigationContainer>
        <Text>BookSwap</Text>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

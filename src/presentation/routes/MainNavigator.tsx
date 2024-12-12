import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BookScreen, HomeScreen } from 'screens';
import { Book } from 'core';

export type MainNavigatorParams = {
  Home: undefined,
  Book: { book: Book },
}

const Stack = createStackNavigator<MainNavigatorParams>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Book" component={BookScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

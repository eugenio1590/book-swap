/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Text } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-paper';
import { BottomNavigationBar } from '../components';

interface Route {
  name: string;
  label: string;
  icon: string;
  component?: React.ReactNode;
}

const routes: Route[] = [
  {name: 'Books', label: 'Books', icon: 'book'},
  {name: 'Search', label: 'Search', icon: 'search'},
  {name: 'Quizzes', label: 'Quizzes', icon: 'grid'},
  {name: 'Profile', label: 'Profile', icon: 'user'},
];

const Tab = createBottomTabNavigator();

export const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes[0].name}
      tabBar={(props) => <BottomNavigationBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {routes.map((route, index) => (
        <Tab.Screen
          key={index}
          name={route.name}
          component={() => <Text>{route.label}</Text>}
          options={{
            tabBarLabel: route.label,
            tabBarIcon: ({ color, size }) => <Icon source={route.icon} color={color} size={size} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeNavigator;

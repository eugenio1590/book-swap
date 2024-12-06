/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Text } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-paper';
import { BottomNavigationBar } from 'components/shared';
import { BooksScreen } from 'screens';

interface Route {
  name: string;
  label: string;
  icon: string;
  component: () => React.JSX.Element;
}

const routes: Route[] = [
  {name: 'Books', label: 'Books', icon: 'book', component: BooksScreen},
  {name: 'Search', label: 'Search', icon: 'search', component: () => <Text>Search</Text>},
  {name: 'Quizzes', label: 'Quizzes', icon: 'grid', component: () => <Text>Quizzes</Text>},
  {name: 'Profile', label: 'Profile', icon: 'user', component: () => <Text>Profile</Text>},
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
          component={route.component}
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

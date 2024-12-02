import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PlatformPressable, Text } from '@react-navigation/elements';
import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useLinkBuilder } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

export const BottomNavigationBar = ({ state, descriptors, navigation } : BottomTabBarProps) => {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={{...styles.tabBarContainer, backgroundColor: colors.primary}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const tabBarIcon = options.tabBarIcon;
        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={index}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabBarItem, isFocused && {...styles.tabBarButton, backgroundColor: colors.secondary}]}
          >
            {tabBarIcon && tabBarIcon({focused: isFocused, color: colors.onPrimary, size: 24})}
            {isFocused && (
              <Text style={{...styles.tabBarLabel, color: colors.onPrimary }}>
                {label}
              </Text>
            )}
          </PlatformPressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    height: 80,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
  },
  tabBarItem: {
    alignItems: 'center',
  },
  tabBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-around',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 20,
    margin: 5,
  },
  tabBarLabel: {
    margin: 5,
  },
});

export default BottomNavigationBar;

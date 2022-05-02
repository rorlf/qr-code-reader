import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppTabsNavigatorParams } from './types';
import { QRListScreen, ReadQRScreen } from 'screens';
import { MaterialIcons } from '@expo/vector-icons';
import colors from 'shared/styles/colors';
import styles from './styles';

const { Navigator, Screen } =
  createBottomTabNavigator<AppTabsNavigatorParams>();

export const AppTabsNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarInactiveTintColor: colors.inactiveIcon,
        tabBarActiveTintColor: colors.icon
      }}
    >
      <Screen
        name="ReadQRScreen"
        component={ReadQRScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-scanner" color={color} size={size} />
          )
        }}
      />
      <Screen
        name="QRListScreen"
        component={QRListScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="list" color={color} size={size} />
          )
        }}
      />
    </Navigator>
  );
};

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppTabsNavigatorParams } from './types';
import { View, Text } from 'react-native';

const { Navigator, Screen } =
  createBottomTabNavigator<AppTabsNavigatorParams>();

export const AppTabsNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="ReadQRScreen" component={EmptyScreen} />
      <Screen name="QRListScreen" component={EmptyScreen} />
    </Navigator>
  );
};

function EmptyScreen() {
  return (
    <View>
      <Text>Empty</Text>
    </View>
  );
}

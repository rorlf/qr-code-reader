import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppNavigatorParams } from './types';
import { AppTabsNavigator } from 'navigators/AppTabsNavigator';

const { Navigator, Screen } = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        presentation: 'transparentModal',
        animationEnabled: false
      }}
    >
      <Screen name="AppTabsNavigator" component={AppTabsNavigator} />
    </Navigator>
  );
};

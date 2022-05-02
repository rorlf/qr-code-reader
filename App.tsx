import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from 'navigators/AppNavigator';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { RootSiblingParent } from 'react-native-root-siblings';
import store from 'store';
import colors from 'shared/styles/colors';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor={colors.navigationBar} />
        <SafeAreaView style={{ flex: 1 }}>
          <RootSiblingParent>
            <AppNavigator />
          </RootSiblingParent>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

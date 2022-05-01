import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from 'navigators/AppNavigator';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import store from 'store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

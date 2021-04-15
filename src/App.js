import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRouter} from './router';
import {Provider} from 'react-redux';
import {AppStore} from './helper';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={AppStore}>
        <AppRouter />
      </Provider>
    </NavigationContainer>
  );
}

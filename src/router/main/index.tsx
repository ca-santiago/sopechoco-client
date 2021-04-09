import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {MainRouterParamList} from '../../types';
import MainBottomTab from './BottomTab';

const Stack = createStackNavigator<MainRouterParamList>();

export default function MainRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTab" component={memo(MainBottomTab)} />
      <Stack.Screen name="ProfileStack" component={memo(MockUpScreen)} />
      <Stack.Screen name="CheckoutStack" component={memo(MockUpScreen)} />
    </Stack.Navigator>
  );
}

function MockUpScreen() {
  return (
    <View>
      <Text>MaiRouter, yey, you are in </Text>
    </View>
  );
}

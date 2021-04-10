import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {MainRouterParamList} from '../../types';
import ProductStack from '../product';
import MainBottomTab from './BottomTab';

const Stack = createStackNavigator<MainRouterParamList>();

export default function MainRouter() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={MainBottomTab} />
      <Stack.Screen name="ProductStack" component={ProductStack} />
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

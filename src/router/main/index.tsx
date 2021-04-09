import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import {Text, View} from 'react-native';

const Stack = createStackNavigator<any>();

export default function MainRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={memo(MockUpScreen)} />
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

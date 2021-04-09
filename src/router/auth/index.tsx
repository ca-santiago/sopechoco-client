import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import {LoginScreen, SignUpScreen} from '../../auth/screens';

const Stack = createStackNavigator<any>();

export default function AuthRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={memo(LoginScreen)} />
      <Stack.Screen name="SignUp" component={memo(SignUpScreen)} />
    </Stack.Navigator>
  );
}

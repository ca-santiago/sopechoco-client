import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import {LoginScreen, SignUpScreen} from '../../auth/screens';
import {AuthStackParamList} from '../../types';

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthRouter() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={memo(LoginScreen)} />
      <Stack.Screen name="SignUp" component={memo(SignUpScreen)} />
    </Stack.Navigator>
  );
}

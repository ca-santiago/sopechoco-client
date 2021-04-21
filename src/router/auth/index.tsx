import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/*
 * Components
 */
import {LoginScreen} from '../../screens/Login';
import {SignUpScreen} from '../../screens/SignUp';
import {AuthStackParamList} from '../../types';

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthRouter() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

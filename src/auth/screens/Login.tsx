import React, {Dispatch} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../../actions/Auth';
import {AuthReducerAction} from '../../types';

export function LoginScreen() {
  const authDispacher = useDispatch<Dispatch<AuthReducerAction>>();

  function _handleSubmit() {
    AuthActions.Login({email: '', password: ''})(authDispacher);
  }

  return (
    <View>
      <Text>Login Screen bro </Text>
      <Button title="Login" onPress={_handleSubmit} />
    </View>
  );
}

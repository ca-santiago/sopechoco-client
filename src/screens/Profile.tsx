import React, {Dispatch} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '../actions';
import {AppCombinedState, AuthReducerAction, AuthState} from '../types';

export default function ProfileHomeScreen() {
  const {userInfo} = useSelector<AppCombinedState, AuthState>(
    state => state.auth,
  );
  const authDispacher = useDispatch<Dispatch<AuthReducerAction>>();

  function _signOut() {
    AuthActions.SignOut()(authDispacher);
  }

  return (
    <>
      <Text>Profile Home Screen</Text>
      <View
        style={{
          height: 2,
          backgroundColor: '#444',
          width: '100%',
        }}
      />
      <Text>ID: {userInfo?.id}</Text>
      <Text>I'm {userInfo?.name}</Text>
      <Text>Email: {userInfo?.email}</Text>
      <Button title="SignOut" onPress={_signOut} />
    </>
  );
}

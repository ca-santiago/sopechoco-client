import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AppCombinedState, AuthState} from '../types';

export default function ProfileHomeScreen() {
  const {userInfo} = useSelector<AppCombinedState, AuthState>(
    state => state.auth,
  );
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
    </>
  );
}

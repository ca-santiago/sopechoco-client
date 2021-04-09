import React from 'react';
import {View, Text} from 'react-native';

export default function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Loading screen...</Text>
    </View>
  );
}

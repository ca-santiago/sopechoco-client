import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import ProductDetail from '../../screens/product/buildProduct';
import {ProductStackParamList} from '../../types';

const Stack = createStackNavigator<ProductStackParamList>();

export default function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={ProductDetail} />
      <Stack.Screen name="guisoDetail" component={mock} />
    </Stack.Navigator>
  );
}

function mock() {
  return <Text>Mock product</Text>;
}

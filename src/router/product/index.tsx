import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import ProductDetailScreen from '../../screens/product/ProductBuilder';
import {ProductStackParamList} from '../../types';

const Stack = createStackNavigator<ProductStackParamList>();

export default function ProductStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Product" component={ProductDetailScreen} />
      <Stack.Screen name="guisoDetail" component={mock} />
    </Stack.Navigator>
  );
}

function mock() {
  return <Text>Mock product</Text>;
}

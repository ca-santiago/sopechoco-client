import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MainRouterParamList, Product} from '../../types';
import {ProductCard} from './styles';

export type HomeProductCardProps = Product;
export function HomeProductCard(props: HomeProductCardProps) {
  const {id, title, price} = props;

  const {navigate} = useNavigation<
    StackNavigationProp<MainRouterParamList, 'ProductStack'>
  >();

  function _onPress() {
    navigate('ProductStack', {screen: 'Product', params: {id}});
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={_onPress}>
      <ProductCard.Container>
        <ProductCard.Image />
        <ProductCard.Body>
          <ProductCard.Title>{title}</ProductCard.Title>
          <Text>$ {price}</Text>
        </ProductCard.Body>
      </ProductCard.Container>
    </TouchableOpacity>
  );
}

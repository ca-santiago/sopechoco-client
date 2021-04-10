import React, {Dispatch, useEffect} from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {ProductActions} from '../../actions/Products';
import {HomeProductCard} from '../../components/product';
import {
  AppCombinedState,
  AuthState,
  ProductReducerAction,
  ProductState,
} from '../../types';

export default function ProductHomeScreen() {
  const {items: products} = useSelector<AppCombinedState, ProductState>(
    s => s.product,
  );
  const {token} = useSelector<AppCombinedState, AuthState>(s => s.auth);
  const prodDispacher = useDispatch<Dispatch<ProductReducerAction>>();

  useEffect(() => {
    ProductActions.GetProducts(`${token}`)(prodDispacher);
  }, []);

  return (
    <>
      <Text>Order</Text>
      <ScrollView style={{flex: 1}}>
        {products.map(prod => (
          <HomeProductCard key={prod.id} {...prod} />
        ))}
      </ScrollView>
    </>
  );
}

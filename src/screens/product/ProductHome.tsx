import React, {Dispatch, useEffect} from 'react';
import {Text, View} from 'react-native';
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
  }, [token, prodDispacher]);

  return (
    <>
      <View
        style={{
          height: 100,
          width: '100%',
          backgroundColor: '#ea2a2a',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 32,
            color: 'white',
          }}>
          Sopechoco
        </Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}>
        {products.map(prod => (
          <HomeProductCard key={prod.id} {...prod} />
        ))}
      </ScrollView>
    </>
  );
}

import React, {useState} from 'react';
import {Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {
  AppCombinedState,
  ProductStackParamList,
  ProductState,
} from '../../types';

type Props = StackScreenProps<ProductStackParamList, 'Product'>;

export default function ProductDetail(props: Props) {
  const {
    route: {params},
  } = props;
  const {items} = useSelector<AppCombinedState, ProductState>(s => s.product);
  const [data] = useState(items.find(item => item.id === params.id));

  return data ? (
    <>
      {data.available ? null : (
        <Text>Este producto no se encuentra disponible</Text>
      )}
      <Text>{data.title}</Text>
      {data.description ? <Text>{data.description}</Text> : null}
      <Text>{data.price}</Text>
      <Text>Guisos máximos: {data.maxGuisos}</Text>
      <Text>Guisos minimos: {data.minGuisos}</Text>
    </>
  ) : (
    <Text>Not found</Text>
  );
}

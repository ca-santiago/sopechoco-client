import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';

/*
 * Components
 */
import {CardStatus} from '../../components/order/status';

/*
 * Hooks
 */

/*
 * Styles
 */

/*
 * Types
 */
import {OrderItem, OrderStackParamList} from '../../types';
type Props = {} & StackScreenProps<OrderStackParamList, 'OrderDetails'>;

/* ======================= COMPONENT  ====================== */

export default function OrderDetailsScreen(props: Props) {
  const {route} = props;
  const {createdAt, items, status, groups, id} = route.params.order;

  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  return (
    <>
      <Text>Hello</Text>
      <Text>{id}</Text>
      {/* <Text>Total: {total}</Text> */}
      <Text>{createdAt}</Text>
      <Text>{status}</Text>
      <Text>Orders: {groups.length}</Text>
      <CardStatus status={status} />
      <ScrollView>
        {orderItems.map(i => (
          <View key={i.id}>
            <Text>{i.id}</Text>
            <Text>{i.itemId}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

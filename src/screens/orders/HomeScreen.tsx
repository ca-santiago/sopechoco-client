import React, {Dispatch, useCallback, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

/*
 * Components
 */
import OrderCard from '../../components/order/HomeCard';
import AccessToCart from '../../components/cart/accessCart';

/*
 * Hooks
 */
import {useDispatch, useSelector} from 'react-redux';
// import {OrderActions} from '../actions/Order';

/*
 * Styles
 */

/*
 * Types
 */
import {
  AppCombinedState,
  AuthState,
  Order,
  OrderActionTypeWithoutData,
  OrderActionTypeSingle,
  OrderReducerAction,
  OrderState,
} from '../../types';
import {OrderActions} from '../../actions/Order';
import {CardSeparator} from '../../components/order/card.style';
import EmptyList from '../../components/EmptyList';

type Props = {};

/* ======================= COMPONENT  ====================== */

export default function OrderHomeScreen(props: Props) {
  const {} = props;

  const orderDispatcher = useDispatch<Dispatch<OrderReducerAction>>();
  const {orders} = useSelector<AppCombinedState, OrderState>(s => s.order);
  const {token} = useSelector<AppCombinedState, AuthState>(s => s.auth);

  // Local State
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [flatStyle] = useState<boolean>(true);

  const triggerGetOrders = useCallback(() => {
    setRefreshing(true);
    // Clear state
    orderDispatcher({type: OrderActionTypeWithoutData.RESET_ORDERS});
    // Get data
    OrderActions.GetAllOrders(`${token}`)(orderDispatcher).finally(() => {
      setRefreshing(false);
    });

    orderDispatcher({
      type: OrderActionTypeSingle.ORDER_CREATED,
      data: {
        createdAt: new Date('03/13/1999').toDateString(),
        description: '1 Sope de salpicon.\n3 Sope de Chicharron.',
        groups: [],
        id: '123123',
        items: ['123', '222'],
        status: 'PLACED',
        total: 120,
      },
    });
    orderDispatcher({
      type: OrderActionTypeSingle.ORDER_CREATED,
      data: {
        createdAt: new Date().toDateString(),
        description: 'Algo descriptivo',
        groups: [],
        id: '12',
        items: [],
        status: 'CANCELED',
        total: 120,
      },
    });
    orderDispatcher({
      type: OrderActionTypeSingle.ORDER_CREATED,
      data: {
        createdAt: new Date().toDateString(),
        description: 'Algo descriptivo',
        groups: [],
        id: '13',
        items: [],
        status: 'FINISHED',
        total: 120,
      },
    });
  }, [orderDispatcher, token]);

  useEffect(() => {
    triggerGetOrders();

    return () => {
      orderDispatcher({type: OrderActionTypeWithoutData.RESET_ORDERS});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderOrderCard(o: Order) {
    return <OrderCard isFlatStyle={flatStyle} key={o.id} order={o} />;
  }

  function triggerRefresh() {
    triggerGetOrders();
  }

  function onScrollReachEnd() {
    //TODO: Implement
  }

  return (
    <View style={{backgroundColor: 'rgb(240,245,250)', flex: 1}}>
      <FlatList
        onRefresh={triggerRefresh}
        refreshing={refreshing}
        ListHeaderComponent={<AccessToCart />}
        stickyHeaderIndices={[0]}
        onEndReached={onScrollReachEnd}
        bounces
        ItemSeparatorComponent={() => (flatStyle ? <CardSeparator /> : null)}
        ListEmptyComponent={<EmptyList />}
        data={orders}
        renderItem={({item}) => renderOrderCard(item)}
      />
    </View>
  );
}

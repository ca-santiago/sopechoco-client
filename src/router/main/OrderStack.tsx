import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/*
 * Screens
 */
import OrderHomeScreen from '../../screens/orders/HomeScreen';

/*
 * Components
 */

/*
 * Types
 */
import {OrderStackParamList} from '../../types';
import OrderDetailsScreen from '../../screens/orders/OrderDetails';

/*
 * Constants
 */
const Stack = createStackNavigator<OrderStackParamList>();

/* ======================= COMPONENT  ====================== */

export default function OrderStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Ordenes',
          // headerRight: ({tintColor}) => (
          // TODO: Replace this with a button component that enable navigation
          // to card stack navigation
          //   <View>
          //     <Text>RIGHT</Text>
          //   </View>
          // ),
        }}
        name="OrderHome"
        component={OrderHomeScreen}
      />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
    </Stack.Navigator>
  );
}

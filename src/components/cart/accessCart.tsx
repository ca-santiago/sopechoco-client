import React from 'react';
import {Text, View} from 'react-native';

/*
 * Components
 */
import Icon from 'react-native-vector-icons/Ionicons';

/*
 * Hooks
 */

/*
 * Styles
 */

/*
 * Types
 */

type Props = {};

/* ======================= COMPONENT  ====================== */

function AccessToCart() {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        padding: 10,
        margin: 3,
        marginTop: 5,
        borderRadius: 5,
        elevation: 1,
        // height: ,
        backgroundColor: '#9c2e2e',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{color: 'white'}}>
        Acceder al carrito
      </Text>
      <Icon name="cart" size={24} color="#ffffff" />
    </View>
  );
}

export default AccessToCart;

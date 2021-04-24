import React from 'react';
import {BottomTabParamList} from '../../types';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductHomeScreen from '../../screens/product/ProductHome';
import ProfileHomeScreen from '../../screens/Profile';

/*
 * Screens
 */
import OrderStack from './OrderStack';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function MainBottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => setIcon({color, size, name: 'home'}),
        }}
        name="Profucts"
        component={ProductHomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => setIcon({color, size, name: 'cart'}),
        }}
        name="Orders"
        component={OrderStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) =>
            setIcon({color, size, name: 'person-circle-sharp'}),
        }}
        name="Profile"
        component={ProfileHomeScreen}
      />
    </Tab.Navigator>
  );
}

function setIcon({color, size, name}: any) {
  return <Icon name={name} size={size} color={color} />;
}

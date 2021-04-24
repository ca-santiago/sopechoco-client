import React, {memo} from 'react';
import {Pressable, Text} from 'react-native';

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
type Props = {
  enabled: boolean;
  onPress?: () => void;
};

/* ======================= COMPONENT  ====================== */

// Rename this to props in its own component file
function StyleSelector(props: Props) {
  const color = '#585f72';

  return (
    <Pressable
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        marginBottom: 3,
        marginTop: 3,
      }}
      onPress={() => props.onPress?.()}>
      <React.Fragment>
        <Icon name="menu" size={28} color={color} />
        <Text style={{color}}>{props.enabled ? 'Moderno' : 'Plano'}</Text>
      </React.Fragment>
      <Icon name="options" size={28} color={color} />
    </Pressable>
  );
}

export default memo(StyleSelector);

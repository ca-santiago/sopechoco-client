import React, {memo} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
/*
 * Helpers
 */
import {clamp} from '../../helper/clamp';
/*
 * Styles
 */
import {SProductCounter} from './styles';
/*
 * Components
 */
const {Container, Text, Total, Pressable} = SProductCounter;

/*
 * Types
 */
type Props = {
  total: number;
  count: number;
  onChange?: (value: number) => void;
};

function ProductCounter(props: Props) {
  const {total, onChange, count} = props;

  function _decrease() {
    const clamped = clamp(50, 1, count - 1);
    // setCount(clamped);
    clamped !== count && onChange?.(clamped);
  }

  function _increase() {
    const clamped = clamp(50, 1, count + 1);
    // setCount(clamped);
    clamped !== count && onChange?.(clamped);
  }

  return (
    <Container>
      <Total>$ {String(total)}</Total>
      <Pressable onPress={_decrease}>
        <Ionicon name="remove" color="white" size={25} />
      </Pressable>
      <Text>{String(count)}</Text>
      <Pressable onPress={_increase}>
        <Ionicon name="add" color="white" size={25} />
      </Pressable>
    </Container>
  );
}

export default memo(ProductCounter);

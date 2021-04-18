import React, {memo, useState} from 'react';

// STYLES
import {SProductCounter} from './styles';
const {Container, Text, Total, Pressable} = SProductCounter;
import Ionicon from 'react-native-vector-icons/Ionicons';

function clamp(max: number, min: number, curr: number) {
  return Math.max(min, Math.min(max, curr));
}

type Props = {
  total: number;
  onChange?: (value: number) => void;
};

function ProductCounter(props: Props) {
  const {total, onChange} = props;

  function _decrease() {
    const clamped = clamp(50, 1, count - 1);
    setCount(clamped);
    clamped !== count && onChange?.(clamped);
  }

  function _increase() {
    const clamped = clamp(50, 1, count + 1);
    setCount(clamped);
    clamped !== count && onChange?.(clamped);
  }

  const [count, setCount] = useState<number>(1);

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

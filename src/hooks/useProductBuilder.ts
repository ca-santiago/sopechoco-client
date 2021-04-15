import {useMemo, useState} from 'react';
import {Guiso} from '../types';

type Props = {
  max: number;
  min: number;
  price: number;
  selectedGuisos: Guiso[];
};

export function UseProductBuilder(props: Props) {
  const {price, selectedGuisos} = props;
  const [count, setCount] = useState<number>(1);
  const [total, setTotal] = useState<number>(price * count);

  const displayName = useMemo(() => {
    const nameStillArr = Array.from(selectedGuisos.map(v => v.title));
    const shouldJoin = !!selectedGuisos[selectedGuisos.length - 2];
    if (shouldJoin) {
      nameStillArr.splice(selectedGuisos.length - 1, 0, 'y');
    }
    return nameStillArr.join(' ');
  }, [selectedGuisos]);

  function increase(value: number) {
    setCount(prev => prev + value);
    setTotal(price * (count + value));
  }

  function decrease(value: number) {
    setCount(prev => prev - value);
    setTotal(price * (count - value));
  }

  return {
    count,
    total,
    increase,
    decrease,
    displayName,
  };
}

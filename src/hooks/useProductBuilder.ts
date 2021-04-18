import {useMemo, useState} from 'react';
import {Guiso} from '../types';

type Props = {
  max: number;
  min: number;
  price: number;
  selectedGuisos: Guiso[];
};

export function UseProductBuilder(props: Props) {
  const {price, selectedGuisos, max, min} = props;
  const [count, setCount] = useState<number>(1);
  const [total, setTotal] = useState<number>(price * count);
  const canBuy = useMemo(() => {
    const isAmongLimits =
      selectedGuisos.length >= min && selectedGuisos.length <= max;
    return isAmongLimits;
  }, [max, min, selectedGuisos.length]);

  const displayName = useMemo(() => {
    const nameStillArr = Array.from(selectedGuisos.map(v => v.title));
    const shouldJoin = !!selectedGuisos[selectedGuisos.length - 2];
    if (shouldJoin) {
      nameStillArr.splice(selectedGuisos.length - 1, 0, 'y');
    }
    return nameStillArr.join(' ');
  }, [selectedGuisos]);

  function _setCount(value: number) {
    setCount(value);
    setTotal(price * value);
  }

  return {
    count,
    total,
    setCount: _setCount,
    displayName,
    canBuy,
  };
}

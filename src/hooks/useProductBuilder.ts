import {useMemo, useState} from 'react';

/*
 * Types
 */
import {Guiso} from '../types';
type Props = {
  max: number;
  min: number;
  price: number;
};

/*
 * Main Component
 */
export function UseProductBuilder(props: Props) {
  const {price, max, min} = props;

  const [count, setCount] = useState<number>(1);
  const total = useMemo(() => price * count, [count, price]);
  const [selectedGuisos, setSelectedGuisos] = useState<Guiso[]>([]);

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
  }

  function _setSelectedGuisos(gs: Guiso[]) {
    setSelectedGuisos(() => gs);
  }

  function Reset() {
    setCount(1);
    setSelectedGuisos([]);
  }

  return {
    count,
    total,
    setCount: _setCount,
    setSelectedGuisos: _setSelectedGuisos,
    selectedGuisos,
    displayName,
    canBuy,
    Reset,
  };
}

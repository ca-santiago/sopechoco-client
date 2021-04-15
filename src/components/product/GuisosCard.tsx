import React, {memo, useCallback, useEffect, useState} from 'react';
import {Text} from 'react-native';
import useRenderCounter from '../../hooks/useRenderCounter';
import {useRequestInterceptor} from '../../hooks/useRequestInterceptor';
import {GuisoService} from '../../services/guiso';
import {Guiso} from '../../types';
import GuisoSelector from './GuisoSelector';

// STYLES

import {GuisosCard} from './styles';
const {Container, Title, Body} = GuisosCard;

// TYPES

export type Props = {
  max: number;
  min: number;
  guisos: string[];
  preSelected: string[];
  onChangeValue?: (values: Guiso[]) => void;
};

// COMPONENT

function GuisoCard(props: Props) {
  const renderCounter = useRenderCounter();
  const {max, guisos, onChangeValue} = props;

  const [loading, setLoading] = useState<boolean>(true);
  const [_guisos, setGuisos] = useState<Guiso[]>([]);

  const [selected, setSelected] = useState<string[]>([]);
  const [selectedObj, setSelectedObj] = useState<Record<string, Guiso>>({});

  function OK(data: Guiso) {
    setGuisos(prev => [...prev, data]);
  }

  const getData = useRequestInterceptor(GuisoService.GetById, {
    OK,
  });

  useEffect(() => {
    Promise.all(guisos.map(g => getData(g))).finally(() => {
      setLoading(false);
    });
    return () => setGuisos([]);
  }, []);

  const addOne = useCallback(
    function (id: string) {
      if (max <= selected.length) {
        return;
      }
      const filtered = Array.from(new Set([...selected, id]));
      setSelected(filtered);

      const mapped = Object.assign({}, selectedObj, {
        [id]: {},
      });
      setSelectedObj(mapped);
      onChangeValue?.(_guisos.filter(g => mapped[g.id]));
    },
    [_guisos, max, onChangeValue, selected, selectedObj],
  );

  const remove = useCallback(
    function (id: string) {
      const filtered = selected.filter(value => value !== id);
      setSelected(filtered);
      const mapped = Object.assign({}, selectedObj);
      delete mapped[id];
      setSelectedObj(mapped);
      onChangeValue?.(_guisos.filter(g => mapped[g.id]));
    },
    [_guisos, onChangeValue, selected, selectedObj],
  );

  const addOrRemoveGuiso = useCallback(
    function (add: boolean, id: string) {
      add ? addOne(id) : remove(id);
      return;
    },
    [addOne, remove],
  );

  if (loading) {
    return <Text>Loading</Text>;
  }
  return (
    <Container>
      <Title>
        Guisos - {selected.length}/{max}
      </Title>
      <Body>
        {_guisos.map(guiso => (
          <GuisoSelector
            selected={!!selectedObj[guiso.id]}
            key={guiso.id}
            data={guiso}
            onSelectChange={val => addOrRemoveGuiso(val, guiso.id)}
          />
        ))}
      </Body>
      {/* {renderCounter} */}
    </Container>
  );
}

export default GuisoCard;

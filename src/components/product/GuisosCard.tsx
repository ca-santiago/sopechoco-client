import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Text} from 'react-native';
/*
 * Hooks
 */
import useRenderCounter from '../../hooks/useRenderCounter';
import {useRequestInterceptor} from '../../hooks/useRequestInterceptor';
/*
 * Services
 */
import {GuisoService} from '../../services/guiso';
/*
 * Types
 */
import {Guiso} from '../../types';
/*
 * Components
 */
import GuisoSelector from './GuisoSelector';
/*
 * Styles
 */
import {GuisosCard} from './styles';

const {Container, Title, Body} = GuisosCard;

export type Props = {
  max: number;
  min: number;
  guisos: string[];
  selectedGuisos: Guiso[];
  preSelected: string[];
  onChangeValue?: (values: Guiso[]) => void;
};

/*
 * Component
 */
function GuisoCard(props: Props) {
  const renderCounter = useRenderCounter();
  const {max, guisos, onChangeValue, selectedGuisos} = props;

  const [loading, setLoading] = useState<boolean>(true);
  const [_guisos, setGuisos] = useState<Guiso[]>([]);

  const selected = useMemo<string[]>(() => {
    return Object.values(selectedGuisos).map(g => g.id);
  }, [selectedGuisos]);
  const selectedObj = useMemo<Record<string, Guiso>>(() => {
    const mappedObj: Record<string, Guiso> = {};
    Object.values(selectedGuisos).forEach(g => {
      mappedObj[g.id] = g;
    });
    return mappedObj;
  }, [selectedGuisos]);

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
      onChangeValue?.(_guisos.filter(g => filtered.includes(g.id)));
    },
    [_guisos, max, onChangeValue, selected],
  );

  const remove = useCallback(
    function (id: string) {
      const filtered = selected.filter(value => value !== id);
      onChangeValue?.(_guisos.filter(g => filtered.includes(g.id)));
    },
    [_guisos, onChangeValue, selected],
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

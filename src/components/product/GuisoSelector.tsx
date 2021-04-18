/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {TouchableNativeFeedback} from 'react-native';

// STYLES
import {SGuisoSelector} from './styles';
const {Container, Text} = SGuisoSelector;

// TYPES
import {Guiso} from '../../types';
// import useRenderCounter from '../../hooks/useRenderCounter';

type Props = {
  data: Guiso;
  onSelectChange?: (value: boolean) => void;
  selected: boolean;
};

// COMPONENT

function GuisoSelector(props: Props) {
  const {data, onSelectChange, selected} = props;

  // const renderCounter = useRenderCounter();

  function toggleSelect() {
    onSelectChange?.(!selected);
  }

  return (
    <TouchableNativeFeedback
      style={{overflow: 'hidden'}}
      onPress={() => toggleSelect()}>
      <Container selected={selected}>
        <Text selected={selected}>{data.title}</Text>
        {/* {renderCounter} */}
      </Container>
    </TouchableNativeFeedback>
  );
}

export default memo(GuisoSelector);

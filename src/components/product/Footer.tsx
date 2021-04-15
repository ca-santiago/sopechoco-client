import React, {memo} from 'react';
import {Text} from 'react-native';
import useRenderCounter from '../../hooks/useRenderCounter';

import {SFooterSelector} from './styles';

const {Container} = SFooterSelector;

function FooterSelector() {
  const renderCounter = useRenderCounter();
  return (
    <Container>
      {renderCounter}
      <Text>Cositas xD</Text>
    </Container>
  );
}
export default memo(FooterSelector);

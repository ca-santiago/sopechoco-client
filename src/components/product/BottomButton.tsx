import React, {memo} from 'react';

// STYLES
import {SAddToCart} from './styles';
const {AddText, Container} = SAddToCart;

// TYPES
type Props = {
  onAddPress?: () => void;
  addEnable: boolean;
};

/*
 * COMPONENT
 */
function BottomButton(props: Props) {
  const {addEnable, onAddPress} = props;

  function OnPressAdd() {
    if (!addEnable) {
      return;
    }
    onAddPress?.();
  }

  return (
    <Container>
      <AddText onPress={OnPressAdd} enable={addEnable}>
        Agregar
      </AddText>
    </Container>
  );
}
export default memo(BottomButton);

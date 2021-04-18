import React, {memo} from 'react';

/*
 * Styles
 */
import {SBackButton} from './styles';
const {Container} = SBackButton;
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';

function BackButton() {
  const {goBack} = useNavigation();
  return (
    <Container>
      <Pressable onPress={() => goBack()}>
        <Icon name="arrow-back" size={35} color="white" />
      </Pressable>
    </Container>
  );
}

export default memo(BackButton);

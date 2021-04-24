import React from 'react';
import {
  CardOrderStatusContainer,
  CardOrderStatusIcon,
  CardOrderStatusText,
  StatusText,
} from './card.style';

import Icon from 'react-native-vector-icons/Ionicons';

export function CardStatus({status}: {status: string}) {
  const {icon, color, text} = formatStatusText(status);
  return (
    <CardOrderStatusContainer>
      <CardOrderStatusIcon>
        <Icon name={icon} size={24} color={color} />
      </CardOrderStatusIcon>
      <CardOrderStatusText>
        <StatusText>{text}</StatusText>
      </CardOrderStatusText>
    </CardOrderStatusContainer>
  );
}

export function formatStatusText(text: string) {
  const green = '#46af2a';
  switch (text) {
    case 'PLACED':
      return {
        icon: 'clipboard',
        color: '#4d8fdf',
        text: 'En espera',
      };
    case 'ACEPTED':
      return {
        icon: 'fast-food',
        color: green,
        text: 'Aceptada',
      };
    case 'CANCELED':
      return {
        icon: 'fast-food',
        color: '#ea3939',
        text: 'Cancelada',
      };
    case 'FINISHED':
      return {
        icon: 'checkmark-done',
        color: green,
        text: 'Terminada',
      };
    default: {
      return {
        icon: 'checkmark-done',
        color: '#a78d3d',
        text: 'No Status',
      };
    }
  }
}

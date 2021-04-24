import React, {memo} from 'react';

/*
 * Components
 */
import {TouchableNativeFeedback} from 'react-native';

/*
 * Hooks
 */

/*
 * Styles
 */
import {
  BodyDescription,
  BodyText,
  CardContainer,
  CardOrderBody,
  CardTouchableContainer,
  CardTouchableContainerFlat,
  DateText,
} from './card.style';

/*
 * Types
 */
import {Order, OrderStackParamList} from '../../types';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {CardStatus} from './status';
type Props = {order: Order; isFlatStyle: boolean};

/* ======================= COMPONENT  ====================== */

function OrderCard(props: Props) {
  const {order, isFlatStyle} = props;

  const {navigate} = useNavigation<
    StackNavigationProp<OrderStackParamList, 'OrderHome'>
  >();

  const Wrapper = isFlatStyle
    ? CardTouchableContainerFlat
    : CardTouchableContainer;

  return (
    <Wrapper>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#b7b7b7', false)}
        onPress={() => navigate('OrderDetails', {order})}>
        <CardContainer>
          <CardDetails {...order} />
          <CardStatus status={order.status} />
        </CardContainer>
      </TouchableNativeFeedback>
    </Wrapper>
  );
}

function CardDetails(props: Order) {
  const {createdAt, groups, items, description} = props;
  const date = new Date(createdAt);
  return (
    <CardOrderBody>
      {/* <BodyText>Total: ${total}</BodyText> */}
      <>
        {description && <BodyDescription>{description}</BodyDescription>}
        <BodyText>Personas: {groups.length || 1}</BodyText>
        <BodyText>{items.length || 1} platos </BodyText>
      </>
      <DateText>
        {date.toLocaleDateString()} {date.toTimeString().substring(0, 5)}
      </DateText>
    </CardOrderBody>
  );
}

export default memo(OrderCard);

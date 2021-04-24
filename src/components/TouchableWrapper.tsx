import React, {memo} from 'react';
import {ViewProps} from 'react-native';

type Props = {
  radius?: number;
  component: JSX.Element;
} & ViewProps;

import styled from 'styled-components/native';

const Wrapper = styled.View<{radius: number} & ViewProps>`
  overflow: hidden;
  border-radius: ${props => props.radius}px;
`;

function TouchableWrapper(props: Props) {
  const {component, radius} = props;
  return (
    <Wrapper {...props} children={component} radius={radius ? radius : 0} />
  );
}

export default memo(TouchableWrapper);

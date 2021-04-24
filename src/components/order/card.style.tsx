import styled from 'styled-components/native';

const textColor = 'rgb(80, 80, 80)';

// Containers

export const CardTouchableContainer = styled.View`
  elevation: 1;
  margin: 5px;
  overflow: hidden;
  border-radius: 10px;
`;

export const CardTouchableContainerFlat = styled.View`
  overflow: hidden;
`;

export const CardSeparator = styled.View`
  height: 5px;
  /* background-color: #fff; */
`;

export const CardContainer = styled.View`
  padding: 5px;
  padding-left: 10px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  min-height: 70px;
  background-color: #fff;
  justify-content: space-between;
`;

export const CardOrderBody = styled.View`
  display: flex;
  flex-direction: column;
`;

export const CardOrderStatusContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

// Atoms

export const CardText = styled.Text`
  color: ${textColor};
`;

export const StatusText = styled.Text`
  color: #98a1ac;
  font-size: 12px;
`;

export const DateText = styled.Text`
  color: #98a1ac;
  font-size: 11px;
  justify-content: flex-end;
`;

export const BodyText = styled.Text`
  color: #454748;
  font-size: 13px;
  flex: 1;
`;

export const BodyDescription = styled.Text`
  color: #444;
  font-weight: bold;
`;

export const CardOrderStatusIcon = styled.View``;

export const CardOrderStatusText = styled.View`
  color: ${textColor};
`;

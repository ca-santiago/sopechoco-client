import styled from 'styled-components/native';

export const ProductCard = {
  Container: styled.View`
    min-height: 30px;
    background: #ee3;
    flex-direction: row;
    margin: 2px;
  `,
  Body: styled.View`
    background-color: #ff6;
    flex: 1;
    padding: 5px;
  `,
  Image: styled.View`
    height: 80px;
    width: 80px;
  `,
  Title: styled.Text`
    font-size: 16px;
    font-weight: bold;
  `,
};

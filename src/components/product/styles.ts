import styled from 'styled-components/native';

export const SProductView = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const SProductScroll = styled.ScrollView`
  flex: 1;
`;

export const GuisosCard = {
  Container: styled.View`
    margin: 5px;
    padding: 10px;
    border-radius: 15px;
    background-color: rgb(200, 70, 20);
  `,
  Title: styled.Text`
    color: white;
    margin-left: 10px;
    font-size: 17px;
    font-weight: bold;
  `,
  Body: styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    flex-wrap: wrap;
  `,
};

type GuisoSelectorProps = {
  selected: boolean;
};

export const SGuisoSelector = {
  Container: styled.View<GuisoSelectorProps>`
    background-color: ${props =>
      props.selected
        ? 'rgba(255, 255, 255, 0.742)'
        : 'rgba(255, 255, 255, 0.174)'};
    padding: 10px;
    margin: 5px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    width: auto;
  `,
  Text: styled.Text<GuisoSelectorProps>`
    color: ${props => (props.selected ? '#333' : '#fff')};
  `,
};

export const ProductCard = {
  Container: styled.View`
    min-height: 50px;
    background: #fff;
    flex-direction: row;
    margin: 2px;
  `,
  Body: styled.View`
    background-color: #ffff;
    flex: 1;
    padding: 5px;
  `,
  Image: styled.View`
    height: 120px;
    width: 120px;
    background-color: #ddd;
  `,
  Title: styled.Text`
    font-size: 16px;
    font-weight: bold;
  `,
};

export const SProductDetail = {
  Container: styled.View`
    min-height: 350px;
    background-color: #fff;
    display: flex;
  `,
  ImagenContainer: styled.View`
    width: 100%;
    max-height: 220px;
    background-color: #eee;
  `,
  Body: styled.View`
    margin: 8px;
  `,
  Image: styled.Image`
    width: 100%;
    height: 100%;
  `,
  Title: styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #333;
  `,
  Description: styled.Text``,
  Price: styled.Text`
    color: #333;
  `,
};

export const SFooterSelector = {
  Container: styled.View`
    background-color: #ed553b;
    color: #fff;
    height: 60px;
    flex-direction: row;
    /* border-top-left-radius: 15px; */
    /* border-top-right-radius: 15px; */
    padding: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  `,
};

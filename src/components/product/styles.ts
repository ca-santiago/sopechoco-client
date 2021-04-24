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
    background-color: #ed553b;
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
    border-radius: 8px;
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
    min-height: 250px;
    background-color: #fff;
    display: flex;
  `,
  ImagenContainer: styled.View`
    width: 100%;
    max-height: 200px;
    background-color: #eee;
    overflow: hidden;
    /* border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px; */
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
    /* font-weight: bold; */
    color: #333;
  `,
  Description: styled.Text``,
  Price: styled.Text`
    color: #333;
    font-size: 18px;
  `,
};

export const SProductCounter = {
  Container: styled.View`
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 5px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: 'rgb(237, 85, 59)';
  `,
  Text: styled.Text`
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
  `,
  Total: styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 15px;
  `,
  Pressable: styled.Pressable`
    border-radius: 5px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.4);
  `,
};

export const SAddToCart = {
  Container: styled.View`
    flex-direction: column;
    padding: 5px;
  `,
  CartIcon: styled.Pressable`
    border-radius: 5px;
    padding: 5px;
    align-self: flex-end;
    background-color: rgba(255, 255, 255, 0.3);
  `,
  AddBtn: styled.View<{enable: boolean}>``,
  AddText: styled.Text<{enable: boolean}>`
    align-items: center;
    justify-content: center;
    background-color: ${props =>
      props.enable ? 'rgb(237, 85, 59)' : 'rgba(237, 85, 59, 0.6)'};
    padding: 15px;
    border-radius: 15px;
    width: 100%;
    margin: auto;
    text-align: center;
    color: ${props => (props.enable ? 'white' : 'white')};
  `,
};

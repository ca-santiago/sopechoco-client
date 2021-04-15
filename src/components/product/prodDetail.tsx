import React, {memo} from 'react';

// HOOKS
import useRenderCounter from '../../hooks/useRenderCounter';

// STYLES
import {SProductDetail} from './styles';
const {
  Container,
  ImagenContainer,
  Title,
  Description,
  Price,
  Image,
  Body,
} = SProductDetail;

// TYPES
import {Product} from '../../types';
type Props = {
  data: Product;
  customName: string;
};

// COMPONENT
function ProductDetails(props: Props) {
  const {data, customName} = props;

  const renderCounter = useRenderCounter();

  return (
    <Container>
      {/* {renderCounter} */}
      <ImagenContainer>
        <Image source={{uri: 'http://192.168.43.23:3000/sope.jpg'}} />
      </ImagenContainer>
      <Body>
        <Title>
          {data.title} {customName && 'de'} {customName}
        </Title>
        <Price>$ {data.price}</Price>
        {!!data.description && <Description>{data.description}</Description>}
      </Body>
    </Container>
  );
}

export default memo(ProductDetails);

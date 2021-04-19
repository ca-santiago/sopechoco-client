import React, {memo} from 'react';

/*
 * Components
 */
import BackButton from '../../components/BackButton';

/*
 * Hooks
 */
// import useRenderCounter from '../../hooks/useRenderCounter';

/*
 * STYLES
 */
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

/*
 * Types
 */
import {Product} from '../../types';
type Props = {
  data: Product;
  customName: string;
};

function ProductDetails(props: Props) {
  const {data, customName} = props;

  return (
    <Container>
      {/* {renderCounter} */}
      <BackButton />
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

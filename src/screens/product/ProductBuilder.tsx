import React, {memo, useCallback, useMemo, useState} from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

/*
 * Components
 */
import ProductDetails from '../../components/product/prodDetail';
import BottomButton from '../../components/product/BottomButton';
import GuisoCard from '../../components/product/GuisosCard';
import ProductCounter from '../../components/product/counter';

/*
 * Styles
 */
import {SProductView} from '../../components/product/styles';

/*
 * Hooks
 */
import {UseProductBuilder} from '../../hooks/useProductBuilder';
import {useSelector} from 'react-redux';

/*
 * Types
 */
import {StackScreenProps} from '@react-navigation/stack';
import {
  AppCombinedState,
  Guiso,
  ProductStackParamList,
  ProductState,
} from '../../types';
type Props = StackScreenProps<ProductStackParamList, 'Product'>;

/*
 * Component
 */
function ProductDetailScreen(props: Props) {
  const {params} = props.route;

  // Hooks
  const {items} = useSelector<AppCombinedState, ProductState>(s => s.product);

  // Local state
  const product = useMemo(() => items.find(item => item.id === params.id), [
    items,
    params.id,
  ]);
  const [selectedGuisos, setSelectedGuisos] = useState<Guiso[]>([]);

  const onGuisoCardValueChange = useCallback(function (values: Guiso[]) {
    setSelectedGuisos(_ => values);
  }, []);

  if (product == null) {
    return <Text>Not found</Text>;
  }

  const state = UseProductBuilder({
    max: product.maxGuisos,
    min: product.minGuisos,
    price: product.price,
    selectedGuisos: selectedGuisos,
  });

  function transferToCart() {
    console.log('Transfering');
  }

  return (
    <SProductView>
      <ScrollView>
        {/* {renderCounter} */}
        <ProductDetails data={product} customName={state.displayName} />
        <ProductCounter total={state.total} onChange={state.setCount} />
        <GuisoCard
          preSelected={[]}
          onChangeValue={onGuisoCardValueChange}
          max={product.maxGuisos}
          min={product.minGuisos}
          guisos={product.guisos}
        />
      </ScrollView>
      <BottomButton onAddPress={transferToCart} addEnable={state.canBuy} />
    </SProductView>
  );
}

export default memo<Props>(ProductDetailScreen);

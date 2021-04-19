import React, {memo, useMemo} from 'react';
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

  if (product == null) {
    return <Text>Not found</Text>;
  }

  const state = UseProductBuilder({
    max: product.maxGuisos,
    min: product.minGuisos,
    price: product.price,
  });

  function transferToCart() {
    // THen reset the whole internal state
    // state.Reset();
    console.log('State reseted');
  }

  return (
    <SProductView>
      <ScrollView>
        {/* {renderCounter} */}
        <ProductDetails data={product} customName={state.displayName} />
        <ProductCounter
          total={state.total}
          onChange={state.setCount}
          count={state.count}
        />
        <GuisoCard
          preSelected={[]}
          selectedGuisos={state.selectedGuisos}
          onChangeValue={state.setSelectedGuisos}
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

import React, {memo, useCallback, useMemo, useState} from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// COMPONENTS
import ProductDetails from '../../components/product/prodDetail';
import FooterSelector from '../../components/product/Footer';
import GuisoCard from '../../components/product/GuisosCard';

// STYLES
import {SProductView} from '../../components/product/styles';

// HOOKS
import useRenderCounter from '../../hooks/useRenderCounter';
import {UseProductBuilder} from '../../hooks/useProductBuilder';
import {useSelector} from 'react-redux';

// TYPES
import {StackScreenProps} from '@react-navigation/stack';
import {
  AppCombinedState,
  Guiso,
  ProductStackParamList,
  ProductState,
} from '../../types';
type Props = StackScreenProps<ProductStackParamList, 'Product'>;

function ProductDetailScreen(props: Props) {
  const {params} = props.route;

  // Hooks
  const renderCounter = useRenderCounter();
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

  return (
    <SProductView>
      <ScrollView>
        {/* {renderCounter} */}
        <ProductDetails data={product} customName={state.displayName} />
        <GuisoCard
          preSelected={[]}
          onChangeValue={onGuisoCardValueChange}
          max={product.maxGuisos}
          min={product.minGuisos}
          guisos={product.guisos}
        />
      </ScrollView>
      <FooterSelector />
    </SProductView>
  );
}

export default memo<Props>(ProductDetailScreen);

import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.allProducts);
    const dispatch = useDispatch();
    
    return <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => (
        <ProductItem
            title={itemData.item.title}
            price={itemData.item.price}
            image={itemData.item.imageUrl}
            onAddToCart={()=> {
                dispatch(cartActions.addToCart(itemData.item))
            }}
            onViewDetail={() => props.navigation.navigate('ProductDetail', {
                productId: itemData.item.id,
                productTitle: itemData.item.title,
            })}
        />)}
    />;
}

ProductsOverviewScreen.navigationOptions = {
        headerTitle: 'All Products',
}

export default ProductsOverviewScreen;
import React from 'react';
import { FlatList, Platform, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Colors from '../../constants/Colors';

import HeaderButton from '../../components/UI/HeaderButton';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.allProducts);
    const dispatch = useDispatch();

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', {
            productId: id,
            productTitle: title,
        })
    }
    
    return <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => (
        <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => {
                selectItemHandler(itemData.item.id, itemData.item.title)
            }}
        >
           <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    dispatch(cartActions.addToCart(itemData.item))
                }}
              >
              <Text style={styles.btnText}>Add to cart</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.btn}
                onPress={() => {
                selectItemHandler(itemData.item.id, itemData.item.title)
            }}
              >
                  <Text style={styles.btnText}>View details test</Text>
              </TouchableOpacity>

        </ProductItem>
        )}
    />;
}

ProductsOverviewScreen.navigationOptions = navData => {
      
    return {
    headerTitle: 'PRODUCTS',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu': 'ios-menu'} 
                onPress={() =>{
                navData.navigation.toggleDrawer();
                }} />
        </HeaderButtons>
        ),
        headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Cart"
                iconName={Platform.OS === 'android' ? 'md-cart': 'ios-cart'} 
                onPress={() =>{
                navData.navigation.navigate('Cart')
                }} />
        </HeaderButtons>
        )
                }
}

const styles = StyleSheet.create({
    btnText: {
        fontFamily: 'source-pro-semi',
        fontSize: 16,
        color: Colors.primary,
    },
    btn: {
        borderColor: Colors.primary,
        borderWidth: 3,
        padding: 8,
        borderRadius: 5
    }
})

export default ProductsOverviewScreen;
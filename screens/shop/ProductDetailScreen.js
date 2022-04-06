import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';
import Quantity from '../../components/UI/QuantityPicker';

const ProductDetailScreen = props => { 
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => 
        state.products.allProducts.find(prod => prod.id === productId));

    const dispatch = useDispatch();

    return(<ScrollView>
    <Image style={styles.image} source={{ uri: selectedProduct.imageUrl}}/>
    {/* <View style={styles.qtyContainer}>
        <Quantity/>
        </View> */}
        <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
        <View style={styles.percentContainer}>
        <Text style={styles.description}>THC: {selectedProduct.thc}</Text>
        <Text style={styles.description}>CBD: {selectedProduct.cbd}</Text>
        </View>
        <Text style={styles.description}>Flavor & Aroma: {selectedProduct.flavnAroma}</Text>
        <Text style={styles.descriptionWords}>{selectedProduct.description}</Text>
        <View style={styles.action}>
        
            <TouchableOpacity style={styles.addCartBtn} title="Add to cart" onPress={() => {
                dispatch(cartActions.addToCart(selectedProduct))
            }}>
                <Text style={styles.addText}>Add to cart</Text>
            </TouchableOpacity> 
        </View>
    </ScrollView>);
}

ProductDetailScreen.navigationOptions = navData => {
       return { 
           headerTitle: navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'source-pro-semi'
    },
    description: {
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'source-pro-semi',
        paddingHorizontal: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    action: {
        marginVertical: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        display:'flex', 
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    qtyContainer: {
        alignItems: 'center',
        paddingTop: 10,
    },
    addText: {
        fontFamily: 'source-pro-semi',
        color: 'white',
        textAlign: 'center',
    },
    addCartBtn: {
        backgroundColor: Colors.primary,
        padding: 15,
        marginTop: 15,
        borderRadius: 5,
        width:'100%',   
    },
    percentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    descriptionWords: {
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'source-pro-semi',
        paddingHorizontal: 15,
        marginTop: 30,
        marginBottom: 5,
    }
});

export default ProductDetailScreen;
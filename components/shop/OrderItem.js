import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import CartItem from './CartItem';
import Colors from '../../constants/Colors';
import Card from '../../components/UI/Card';

const OrderItem = props => {
    const [ showDetails, setShowDetails ] = useState(false);

    return (
    <Card style={styles.orderItem}>
        <View style={styles.summary}>
            <Text style={styles.date}>{props.date}</Text>
            <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        </View>
        <Button 
            color={Colors.primary} 
            title={showDetails ? "Hide Details" : "Show details" }
            onPress={() => { setShowDetails(prevState => !prevState)}}
        />
        {showDetails && 
        (<View style={styles.detailItems}>
            {props.items.map(cartItem => (
                <CartItem
                    key={cartItem.productId}
                    quantity={cartItem.quantity}
                    amount={cartItem.sum}
                    title={cartItem.productTitle}
                />
            )
            )}
        </View>
        )}
    </Card>
    );
}

const styles = StyleSheet.create({
    orderItem: {
        alignItems: 'center',
        margin: 20,
        padding: 10,
    },
    summary: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 15,
    },
    totalAmount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    date: {
        fontFamily: 'open-sans',
        fontSize: 16,
        color: '#888',
    },
    detailItems: {
        width: '100%',
    },
});

export default OrderItem;
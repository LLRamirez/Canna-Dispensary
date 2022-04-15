import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import ProductOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';

import { Ionicons } from '@expo/vector-icons';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    },
    headerTitleStyle: {
      fontFamily: 'source-pro-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'source-pro-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'source-pro-semi'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
}

const ProductNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
},
{
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
        defaultNavigationOptions: defaultNavOptions,
    }
);

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
}, {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
        defaultNavigationOptions: defaultNavOptions,
    }
);

const AdminNavigator = createStackNavigator(
  {
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen,
}, {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
        defaultNavigationOptions: defaultNavOptions,
    }
);

const ShopNavigator = createDrawerNavigator(
    {
    PRODUCTS: ProductNavigator,
    ORDERS: OrdersNavigator,
    ADMIN: AdminNavigator,
}, {
    contentOptions: {
        activeTintColor: Colors.primary,
        itemsContainerStyle: {
          paddingTop: 40,
        },
    }
})

export default createAppContainer(ShopNavigator);
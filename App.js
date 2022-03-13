import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';
import { View, Text } from 'react-native';
import ordersReducer from './store/reducers/orders';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'source-pro-black': require('./assets/fonts/SourceCodePro-Black.ttf'),
    'source-pro-bold': require('./assets/fonts/SourceCodePro-Bold.ttf'),
    'source-pro-reg': require('./assets/fonts/SourceCodePro-Regular.ttf'),
    'source-pro-semi': require('./assets/fonts/SourceCodePro-SemiBold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
      
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
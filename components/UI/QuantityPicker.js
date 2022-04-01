import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Quantity = ({ qty, updateQty }) => {
  const update = type => {
    switch (type) {
      case 1:
        qty = qty < 10 ? qty + 1 : qty;
        break;
      default:
        qty = qty > 0 ? qty - 1 : qty;
        break;
    }
    updateQty(qty);
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <Button onPress={() => update(0)} title="-" />
      <Text style={{ padding: 7 }}>{qty}</Text>
      <Button onPress={() => update(1)} title="+" />
    </View>
  );
};

const QuantityPicker = (props) => {
  const [qty, setQty] = React.useState(0);
  const updateQty = qty => {
    setQty(qty);
  };

  return (
    <View style={styles.app}>
      <Text style={styles.title}>Qty</Text>

      <Quantity qty={qty} updateQty={updateQty} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center"
  },
  text: {
    lineHeight: 2,
    fontSize: 3,
    marginVertical: 10,
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default QuantityPicker;

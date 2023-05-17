import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import API from './API_Stock';
import StockButton from './StockButton';

function App() {
  const [stockName, setStockName] = React.useState('IBM')
  const [stockCode, setStockIndex] = React.useState('IBM')
  const [stockChange, setStockChange] = React.useState('8.700')

  const handleButtonPress = (stockName, stockCode) => {
    API(stockCode).then(data => {
      const { stockCode, stockChange, stockChangePercent } = data;
      setStockName(stockName)
      setStockIndex(stockCode)
      setStockChange(stockChange)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.stockName}>{stockName}</Text>
        <Text style={styles.stockCode}>{stockCode}</Text>
        <Text style={styles.stockChange}>{stockChange}</Text>
      </View>
      <View style={styles.viewFooter}>
        <View style={styles.viewItem}>
          <StockButton onPress={handleButtonPress} code={"IBM"} name={"IBM"} />
          <StockButton onPress={handleButtonPress} code={"FLC"} name={"FLC"} />
          <StockButton onPress={handleButtonPress} code={"VJC"} name={"VIETJET"} />
        </View>

        <View style={styles.viewItem}>
          <StockButton onPress={handleButtonPress} code={"MSN"} name={"MASSAN"} />
          <StockButton onPress={handleButtonPress} code={"VNM"} name={"VINAMILK"} />
          <StockButton onPress={handleButtonPress} code={"SRC"} name={"SRC"} />
        </View>

        <View style={styles.viewItem}>
          <StockButton onPress={handleButtonPress} code={"HSBC"} name={"HSBC"} />
          <StockButton onPress={handleButtonPress} code={"SAM"} name={"SAM HOLDING"} />
          <StockButton onPress={handleButtonPress} code={"PET"} name={"PETROLIMEX"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFooter: {
    flex: 1,
  },
  stockName: {
    fontSize: 40,
  },
  stockCode: {
    fontSize: 80,
  },
  stockChange: {
    fontSize: 40,
    color: 'red'
  },
  viewItem: {
    height: 50,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
});

export default App;

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import api from './api_app_stock';

const StockButton = ({ stockName, stockIndex, onPressButton }) => {

  const handlePress = () => {
    // handleItemPress(stockName, stockIndex)
    onPressButton(stockName, stockIndex)
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text>{stockName}</Text>
    </TouchableOpacity>
  )
}

function App() {
  const [stockName, setStockName] = useState('VIN GROUP')
  const [stockIndex, setStockIndex] = useState('VIN')
  const [stockChange, setStockChange] = useState('8.700')

  const handleButtonPress = (stockName, stockIndex) => {
   api(stockIndex).then(data => {
    const { stockIndex, stockChange, stockChangePercent} = data;
    setStockName(stockName)
    setStockIndex(stockIndex) 
    setStockChange(stockChange)
   })
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.stockName}>{stockName}</Text>
        <Text style={styles.stockIndex}>{stockIndex}</Text>
        <Text style={styles.stockChange}>{stockChange}</Text>
      </View>
      <View style={styles.viewFooter}>
        <View style={styles.viewItem}>
          <StockButton stockName={"IBM"} stockIndex={"IBM"} onPressButton={handleButtonPress}/>
          <StockButton stockName={"FLC"} stockIndex={"FLC"} onPressButton={handleButtonPress}/>
          <StockButton stockName={"VIETJET"} stockIndex={"VJC"} onPressButton={handleButtonPress}/>
        </View>

        <View style={styles.viewItem}>
          <StockButton stockName={"MASSAN"} stockIndex={"MSN"} onPressButton={handleButtonPress}/>
          <StockButton stockName={"VINAMILK"} stockIndex={"VNM"} onPressButton={handleButtonPress}/>
          <StockButton stockName={"SRC"} stockIndex={"SRC"} onPressButton={handleButtonPress}/>
        </View>

        <View style={styles.viewItem}>
          <StockButton stockName={"HSBC"} stockIndex={"HSBC"} onPressButton={handleButtonPress}/>
          <StockButton stockName={"SAM HOLDING"} stockIndex={"SAM"} onPressButton={handleButtonPress}/>
          <StockButton stockName={"PETROLIMEX"} stockIndex={"PET"} onPressButton={handleButtonPress}/>
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
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFooter: {
    flex: 1,
    backgroundColor: 'pink',
  },
  stockName: {
    fontSize: 40,
  },
  stockIndex: {
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
  button: {
    flex: 1,
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    marginHorizontal: 10,
  }
});

export default App;

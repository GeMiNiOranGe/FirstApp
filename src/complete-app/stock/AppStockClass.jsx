import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import API from '../../data/ApiStock';
import StockButton from './StockButton';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      stockName: 'None',
      stockCode: 'None',
      stockChange: '0.000',
      stockChangePercent: '0.000%',
    }
    this.handleButtonPress = this.handleButtonPress.bind(this)
  }

  handleButtonPress(stockName, stockCode) {
    API(stockCode)
      .then(data => {
        const { stockCode, stockChange, stockChangePercent } = data
        this.setState({
          stockName,
          stockCode,
          stockChange,
          stockChangePercent,
        })
      })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.stockName}>{this.state.stockName}</Text>
          <Text style={styles.stockCode}>{this.state.stockCode}</Text>
          <Text style={styles.stockChange}>{this.state.stockChange} ({this.state.stockChangePercent})</Text>
        </View>

        <View style={styles.body}>
          <StockButton
            name={"IBM"}
            code={'IBM'}
            onPress={this.handleButtonPress}
          />
          <StockButton
            name={"FLC"}
            code={'FLC'}
            onPress={this.handleButtonPress}
          />
          <StockButton
            name={"VIETJET"}
            code={'FJC'}
            onPress={this.handleButtonPress}
          />
          <StockButton
            name={"MASSAN"}
            code={'MSN'}
            onPress={this.handleButtonPress}
          />
          <StockButton
            name={"VINAMILK"}
            code={'VNM'}
            onPress={this.handleButtonPress}
          />
          <StockButton
            name={"SRC"}
            code={'SRC'}
            onPress={this.handleButtonPress}
          />
          <StockButton
            name={"HSBC"}
            code={'HSBC'}
            onPress={this.handleButtonPress}
          />
          <StockButton
            name={"SAM HOLDING"}
            code={'SAM'}
            onPress={this.handleButtonPress}
          />
          <StockButton
            name={"PETROLIMEX"}
            code={'PET'}
            onPress={this.handleButtonPress}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  head: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  stockName: {
    fontSize: 40,
    color: 'black',
  },
  stockCode: {
    fontSize: 80,
    color: 'black',
  },
  stockChange: {
    fontSize: 40,
    color: 'red',
  },
});

export default App;
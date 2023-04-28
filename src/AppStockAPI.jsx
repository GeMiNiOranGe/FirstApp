import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import API from './API_AppStock';

class StockButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.props.onPress(this.props.name, this.props.code)
        }}
      >
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      stockName: '',
      stockCode: '',
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
  button: {
    margin: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});

export default App;

// function App() {
//   const [stockName, setStockName] = React.useState('')
//   const [stockIndex, setStockIndex] = React.useState('')
//   const [stockChange, setStockChange] = React.useState('0.000')
//   const [stockChangePercent, setStockChangePercent] = React.useState('0.000%')

//   const StockButton = ({ stockName, stockIndex, handleItemPress }) => {
//     const handlePress = () => {
//       handleItemPress(stockName, stockIndex)
//     }
//     return (
//       <TouchableOpacity
//         style={styles.button}
//         onPress={handlePress}
//       >
//         <Text>{stockName}</Text>
//       </TouchableOpacity>
//     )
//   }

//   function handleButtonPress(stockName, stockCode) {
//     API(stockCode)
//     .then(data => {
//       // const [stockCode, stockChange, stockChangePercent] = data
//       setStockName(stockName)
//       setStockIndex(data.stockCode)
//       setStockChange(data.stockChange)
//       setStockChangePercent(data.stockChangePercent)
//     })
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <View style={styles.head}>
//           <Text style={styles.stockName}>{stockName}</Text>
//           <Text style={styles.stockCode}>{stockIndex}</Text>
//           <Text style={styles.stockChange}>{stockChange} ({stockChangePercent})</Text>
//         </View>

//         <View style={styles.body}>
//           <StockButton
//             name={"IBM"}
//             code={'IBM'}
//             handleItemPress={handleButtonPress}
//           />
//           <StockButton
//             name={"FLC"}
//             code={'FLC'}
//             handleItemPress={handleButtonPress}
//           />
//           <StockButton
//             name={"VIETJET"}
//             code={'FJC'}
//             handleItemPress={handleButtonPress}
//           />
//           <StockButton
//             name={"MASSAN"}
//             code={'MSN'}
//             handleItemPress={handleButtonPress}
//           />
//           <StockButton
//             name={"VINAMILK"}
//             code={'VNM'}
//             handleItemPress={handleButtonPress}
//           />
//           <StockButton
//             name={"SRC"}
//             code={'SRC'}
//             handleItemPress={handleButtonPress}
//           />
//           <StockButton
//             name={"HSBC"}
//             code={'HSBC'}
//             handleItemPress={handleButtonPress}
//           />
//           <StockButton
//             name={"SAM HOLDING"}
//             code={'SAM'}
//             handleItemPress={handleButtonPress}
//           />
//           <StockButton
//             name={"PETROLIMEX"}
//             code={'PET'}
//             handleItemPress={handleButtonPress}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// Import liraries
import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native'

// Create a component
class StockButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        // bind a function for onPress of TouchableOpacity
        onPress={() => {
          this.props.onPress(this.props.name, this.props.code)
        }}
      >
        <Text style={{ color: 'black' }}>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

// Define styles
const styles = StyleSheet.create({
  button: {
    margin: 10,
    borderWidth: 1,
    width: 110,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
})

// Make this component available to the app
export default StockButton
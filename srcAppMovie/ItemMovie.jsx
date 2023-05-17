// Import liraries
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'

// Create a component
class ItemMovie extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPressItem(this.props.data)
        }}
      >
        <View style={styles.row}>
          <View style={{ flex: 3 }}>
            <Image
              style={styles.image}
              source={{ uri: this.props.data.Poster }}
            />
          </View>

          <View style={{ flex: 10, padding: 10 }}>
            <Text style={styles.title}>{this.props.data.Title} ({this.props.data.Year})</Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.title}>{'>'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

// Define your styles
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 100,
    marginVertical: 10,
  },
  image: {
    height: 100,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
})

// Make this component available to the app
export default ItemMovie
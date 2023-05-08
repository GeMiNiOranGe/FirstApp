import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import API from '../src/API_AppMovie';

class ScreenMovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textInputValue: '',
    }
    this.moveToMovieDetail = this.moveToMovieDetail.bind(this)
  }

  moveToMovieDetail() {
    this.props.navigation.navigate('MovieDetail', {
      textValue: this.state.textInputValue,
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.moveToMovieDetail}
        >
          <Text style={styles.buttonTitle}>Move to detail</Text>
        </TouchableOpacity>
        
        <TextInput
          style={styles.textInput}
          onChangeText={textInputValue => this.setState({ textInputValue })}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    padding: 10,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonTitle: {
    color: 'black',
  },
  button: {

  },
})

export default ScreenMovieList
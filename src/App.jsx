import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
  Switch,
  TouchableHighlight,
  Alert,
} from 'react-native';

const TITLE_COLOR = 'white'
const FONT_SIZE = 17

class NumberInputField extends React.Component {
  render() {
    return (
      <View style={styles.groupInput}>
        <Text style={styles.title}>{this.props.title}</Text>
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
        />
      </View>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      weight: '0',
      height: '0',
      BMI: 0,
      obesityLevel: 'none',
    }
    this.calculateBMI = this.calculateBMI.bind(this)
  }

  // Below code, only me and god know. And now none of us know how it works. Have fun =))))
  calculateBMI() {
    let fWeight = parseFloat(this.state.weight)
    let fHeight = parseFloat(this.state.height)
    let fBMI = fWeight / Math.pow(fHeight / 100, 2)
    this.setState({
      BMI: isNaN(fBMI) || !isFinite(fBMI) ? 0 : fBMI,
    })
    // Shorthand
    fWeight != 0 && fHeight != 0 && this.showObesityLevel(fBMI)
  }

  showObesityLevel(BMI) {
    if (BMI > 32)
      this.setState({ obesityLevel: 'obese' })
    else if (BMI > 25)
      this.setState({ obesityLevel: 'over weight' })
    else if (BMI > 18.5)
      this.setState({ obesityLevel: 'normal weight' })
    else if (BMI > 0)
      this.setState({ obesityLevel: 'under weight' })
    else
      this.setState({ obesityLevel: 'none' })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.mainTitle}>BMI Caluculator</Text>
        </View>

        <View style={styles.body}>
          <NumberInputField
            title={'Weight (KG)'}
            placeholder={'Weight'}
            onChangeText={weight => this.setState({ weight })}
          />

          <NumberInputField
            title={'Height (CM)'}
            placeholder={'Height'}
            onChangeText={height => this.setState({ height })}
          />

          <View style={styles.center}>
            <Text style={styles.result}>BMI: {this.state.BMI.toFixed(2)}</Text>
            <Text style={[styles.result, { fontSize: FONT_SIZE * 1.25 }]}>Obesity level: {this.state.obesityLevel}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.calculateBMI}
            >
              <Text style={styles.buttonText}>Compute</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    // i don't know why i set this color for the background =))))
    backgroundColor: '#303030',
  },
  head: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 2,
  },
  mainTitle: {
    fontSize: FONT_SIZE * 2.25,
    color: 'white'
  },
  groupInput: {
    marginBottom: 25,
  },
  title: {
    color: TITLE_COLOR,
    fontSize: FONT_SIZE,
    marginBottom: 5,
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'cyan',
    backgroundColor: '#262626',
    color: 'white',
  },
  center: {
    alignItems: 'center',
  },
  result: {
    color: TITLE_COLOR,
    fontSize: FONT_SIZE * 1.5,
    marginBottom: 20,
    // backgroundColor:'red',
  },
  button: {
    backgroundColor: 'cyan',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
    shadowColor: 'cyan',
    elevation: 10,
  },
  buttonText: {
    fontSize: FONT_SIZE * 1.75,
    color: 'black',
  },
});

export default App;

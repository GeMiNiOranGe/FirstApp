import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import NumberInputField from '../component/NumberInputField';

const TEXT_COLOR = 'white'
const FONT_SIZE = 17

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weight: "",
      height: "",
      bmi: 0,
    };

    this.computeBmi = this.computeBmi.bind(this);
  }

  computeBmi() {
    let weight = parseFloat(this.state.weight);
    let height = parseFloat(this.state.height);

    if (weight >= 0 && height >= 0) {
      let bmi = weight / Math.pow(height / 100, 2);
      this.setState({ bmi });
    }
  }

  showObesityLevel(bmi) {
    if (bmi > 32) {
      return 'obese';
    }
    if (bmi > 25) {
      return 'overweight';
    }
    if (bmi > 18.5) {
      return 'normal';
    }
    if (bmi > 0) {
      return 'underweight';
    }
    return 'none';
  }

  isValidValue(value) {
    return value === "" || parseFloat(value) >= 0;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.title}>BMI Caluculator</Text>
        </View>

        <View style={styles.body}>
          <NumberInputField
            title={'Weight (kg)'}
            titleFontSize={FONT_SIZE}
            color={TEXT_COLOR}
            placeholder={'Enter a positive number'}
            onChangeText={weight => this.setState({ weight })}
            value={this.state.weight}
            validate={!this.isValidValue(this.state.weight)}
          />

          <NumberInputField
            title={'Height (cm)'}
            titleFontSize={FONT_SIZE}
            color={TEXT_COLOR}
            placeholder={'Enter a positive number'}
            onChangeText={height => this.setState({ height })}
            value={this.state.height}
            validate={!this.isValidValue(this.state.height)}
          />

          <View style={styles.center}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text style={[styles.result, {
                lineHeight: 30
              }]}>BMI: {this.state.bmi.toFixed(2)} kg/m</Text>

              <Text style={styles.superscript}>2</Text>
            </View>

            <Text style={[styles.result, {
              fontSize: FONT_SIZE * 1.25
            }]}>Obesity level: {this.showObesityLevel(this.state.bmi)}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={this.computeBmi}
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
  title: {
    fontSize: FONT_SIZE * 2.25,
    color: TEXT_COLOR,
  },
  center: {
    alignItems: 'center',
  },
  result: {
    color: TEXT_COLOR,
    fontSize: FONT_SIZE * 1.5,
    marginBottom: 20,
  },
  superscript: {
    fontSize: FONT_SIZE * 0.85,
    lineHeight: 18,
    color: TEXT_COLOR,
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

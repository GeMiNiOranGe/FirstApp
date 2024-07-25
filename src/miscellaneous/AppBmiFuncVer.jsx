import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const TITLE_COLOR = 'white'
const FONT_SIZE = 17

function NumberInputField({ title, value, setValue }) {
  return (
    <View style={styles.groupInput}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        onChangeText={newValue => setValue(newValue)}
        value={value}
      />
    </View>
  )
}

function App() {
  const [weight, setWeight] = useState('0')
  const [height, setHeight] = useState('0')
  const [BMI, setBMI] = useState('0.00')

  function calculateBMI() {
    let fWeight = parseFloat(weight)
    let fHeight = parseFloat(height)
    let BMI = fWeight / Math.pow(fHeight / 100, 2)
    setBMI(BMI.toFixed(2))
  }

  return (
    <SafeAreaView style={styles.container}>
      <NumberInputField
        title={'Weight (KG)'}
        value={weight}
        setValue={setWeight}
      />

      <NumberInputField
        title={'Height (CM)'}
        value={height}
        setValue={setHeight}
      />

      <View style={styles.center}>
        <Text style={styles.result}>BMI: {BMI}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={calculateBMI}
        >
          <Text style={styles.buttonText}>Compute</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    // i don't know why i set this color for the background =))))
    backgroundColor: '#303030',
  },
  groupInput: {
    marginTop: 25,
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
    marginVertical: 20,
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

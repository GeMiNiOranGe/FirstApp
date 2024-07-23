import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  TouchableHighlight,
} from 'react-native';

import DashLine from "../component/DashLine";

function App() {
  const FIRST_NUMBER = 3;
  const SECOND_NUMBER = 5;

  return (
    <SafeAreaView>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn.dribbble.com/userupload/3931175/file/original-a3c650d7ad8cbca11b6cc9bbb42f8cf5.png',
        }}
      />

      <Switch />

      <DashLine />

      <TextInput
        style={styles.textInput}
        value='Useless TextInput'
      />

      <TextInput
        style={[styles.textInput, { height: 100 }]}
        value='Useless MultiLine TextInput'
        multiline={true}
        numberOfLines={2}
      />

      <TouchableOpacity style={styles.button}>
        <Text>Touch me for opcaity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.button}
        onPress={() => { }}
        underlayColor='#f00a'
      >
        <Text>Touch me for Highlight!</Text>
      </TouchableHighlight>

      <View style={styles.compare}>
        <Text>{FIRST_NUMBER} is {FIRST_NUMBER > SECOND_NUMBER ? 'greater' : 'less'} than {SECOND_NUMBER}</Text>
        {[...Array(FIRST_NUMBER)].map((value, index) => (
          <Text>{index + 1}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 40,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'orange',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  button: {
    borderColor: '#f00',
    backgroundColor: '#faa',
    borderWidth: 1,
    padding: 10,
  },
  compare: {
    height: 20,
    alignItems: 'center',
  },
});

export default App;

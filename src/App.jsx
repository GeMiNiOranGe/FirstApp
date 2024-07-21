import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello World!!!</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 40,
  },
});

export default App;

import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import BlinkText from "../component/BlinkText";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <BlinkText>I love to blink</BlinkText>
        <BlinkText>Yes blinking is so great</BlinkText>
        <BlinkText>Why did they ever take this out of HTML</BlinkText>
        <BlinkText>Look at me look at me look at me</BlinkText>
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
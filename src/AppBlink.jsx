import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import BlinkText from "./component/BlinkText";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <BlinkText text='I love to blink' />
        <BlinkText text='Yes blinking is so great' />
        <BlinkText text='Why did they ever take this out of HTML' />
        <BlinkText text='Look at me look at me look at me' />
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
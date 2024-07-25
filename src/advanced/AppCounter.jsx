import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import {
  BgBlue,
  FgBlack,
  FgGreen,
  FgRed,
  FgYellow,
  Reset,
} from '../utilities/ConsoleColor';
import Counter from '../component/Counter';
import AutoCounter from '../component/AutoCounter';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowCounter: true,
    };

    this.hideCounterComponent = this.hideCounterComponent.bind(this);

    console.log(`${FgGreen}${this.constructor.name}${Reset}: ${FgRed}contructor${Reset} is call`);
  }

  hideCounterComponent() {
    this.setState({
      isShowCounter: !this.state.isShowCounter,
    });
  }

  componentDidMount() {
    console.log(`${FgGreen}${this.constructor.name}${Reset}: ${BgBlue}${FgBlack}${this.componentDidMount.name}${Reset} is called`);
  }

  render() {
    const hideOrShowText = !this.state.isShowCounter ? 'Show' : 'Hide';

    console.log(`${FgGreen}${this.constructor.name}${Reset}: ${FgYellow}${this.render.name}${Reset} is called`);

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Counter app</Text>
        <Text style={styles.subtitle}>An example for component lifecycle</Text>

        <Counter />
        
        <Text style={styles.title}>Auto counter</Text>
        {this.state.isShowCounter && <AutoCounter />}

        <Text
          style={styles.text}
          onPress={this.hideCounterComponent}
        >{hideOrShowText}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 54,
    color: 'black',
  },
  subtitle: {
    fontSize: 22,
    color: 'black',
  },
  text: {
    margin: 10,
    fontSize: 14,
    textDecorationLine: 'underline',
    color: 'black',
  },
});

export default App;
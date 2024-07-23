import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import formatTime from "minutes-seconds-milliseconds";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timeElapsed: null,
      isRunning: false,
      startTime: null,
      laps: [],
    };

    this.handleStartPress = this.handleStartPress.bind(this);
    this.handleLapPress = this.handleLapPress.bind(this);
    this.handleResetPress = this.handleResetPress.bind(this);
  }

  handleStartPress() {
    if (this.state.isRunning) {
      clearInterval(this.interval);
      this.setState({ isRunning: false });
      return;
    }

    this.setState({ startTime: new Date() });
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        isRunning: true,
      });
    }, 30);
  }

  handleLapPress() {
    let lap = this.state.timeElapsed;

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  }

  handleResetPress() {
    if (this.state.laps.length || this.state.timeElapsed) {
      this.setState({
        timeElapsed: null,
      });
      this.state.laps.length = 0;
    }

    if (this.state.isRunning) {
      this.handleStartPress();
    }
  }

  startStopButton() {
    let style = this.state.isRunning ? styles.stopButton : styles.startButton;

    return (
      <TouchableHighlight
        style={[styles.button, style]}
        underlayColor={'gray'}
        onPress={this.handleStartPress}
      >
        <Text>
          {this.state.isRunning ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    );
  }

  lapButton() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'gray'}
        onPress={this.handleLapPress}
      >
        <Text>Lap</Text>
      </TouchableHighlight>
    );
  }

  resetButton() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'gray'}
        onPress={this.handleResetPress}
      >
        <Text>Reset</Text>
      </TouchableHighlight>
    );
  }

  laps() {
    return this.state.laps.map((time, index) => (
      <View style={styles.lap} key={index}>
        <Text style={styles.lapText}>Lap #{index + 1}</Text>
        <Text style={styles.lapText}>{formatTime(time)}</Text>
      </View>
    ));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timeWarpper}>
            <Text style={styles.timer}>{formatTime(this.state.timeElapsed)}</Text>
          </View>

          <View style={styles.buttonWarpper}>
            {this.startStopButton()}
            {this.lapButton()}
            {this.resetButton()}
          </View>
        </View>

        <View style={styles.footer}>
          <ScrollView>{this.laps()}</ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  timeWarpper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWarpper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgray',
    padding: 10,
    marginTop: 10,
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 60,
  },
  lapText: {
    fontSize: 30,
  },
  startButton: {
    borderColor: 'green',
  },
  stopButton: {
    borderColor: 'red',
  },
});

export default App;

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

function App() {
  const boxStyle = {
    width: 200,
    height: 200,
    backgroundColor: 'rgb(74,124,226)',
    borderWidth: 10,
    borderBottomColor: 'blue',
    borderLeftColor: 'green',
    borderRightColor: 'yellow',
    borderTopColor: 'red',
    opacity: 0.5,
    borderRadius: 20,
    marginTop: 40,
    marginLeft: 20,
    position: 'absolute' /* as 'absolute' */,
  };
  const box2Style = {
    width: 200,
    height: 200,
    backgroundColor: '#faa',
    borderWidth: 10,
    borderColor: 'black',
    opacity: 0.5,
    borderRadius: 20,
    marginTop: 100,
    marginLeft: 40,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={boxStyle}></View>
      <View style={box2Style}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;

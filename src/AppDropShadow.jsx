import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

let baseColor = '#E5E5F3'
let lightShadow = 'white'
let darkShadow = '#7F7F7F'
let radius = 20
let blur = 0
let distance = 150

function NeuView({ height, width }) {
  return (
    // top shadow
    <View style={{
      height: height,
      width: width,
      backgroundColor: baseColor,
      borderRadius: radius,
      // shadowColor: darkShadow,
      shadowOffset: {
        height: height + distance,
        width: width + distance,
      },
      shadowOpacity: blur,
      elevation: 50,
    }}></View>
  )
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NeuView
        height={200}
        width={200}
      ></NeuView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseColor,
  }
});

export default App;

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

let baseColor = '#e5e5f3';
let lightShadow = 'white';
let darkShadow = '#7f7f7f';
let radius = 20;
let blur = 0;
let distance = 150;
let height = 200;
let width = 200;

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        height: height,
        width: width,
        backgroundColor: baseColor,
        borderRadius: radius,
        // shadowColor: darkShadow,

        // for ios
        shadowOffset: {
          height: height + distance,
          width: width + distance,
        },
        shadowOpacity: blur,

        // for android
        elevation: 50,
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseColor,
  },
});

export default App;

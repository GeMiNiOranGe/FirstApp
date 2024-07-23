import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.inner}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
      </View>
      <View style={[styles.inner, { alignItems: 'flex-end' }]}>
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
        <View style={[styles.box, { backgroundColor: 'pink' }]} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default App;

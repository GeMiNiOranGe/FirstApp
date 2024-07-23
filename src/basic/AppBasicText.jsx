import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>
        I am bold <Text style={{ color: 'red' }}>
          and red and red and red and red and red
          and red and red and red and red and red
        </Text>
      </Text>

      <Text style={{ fontSize: 30, fontWeight: '400', fontStyle: 'italic' }}>
        Big and italic
      </Text>

      <View style={{ width: 300, borderColor: '#000', borderWidth: 2 }}>
        <Text style={{
          fontWeight: 'bold',
          textAlign: 'right',
          textDecorationLine: 'underline',
        }}>
          Underlined Bold and on the right
        </Text>
      </View>

      <Text style={{
        fontSize: 50,
        textShadowOffset: {
          width: 10,
          height: 10,
        },
        textShadowColor: '#aaa',
        textShadowRadius: 10
      }}>
        Huge with shadow
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;

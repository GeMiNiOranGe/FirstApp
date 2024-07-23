import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

function App() {
  const style = {
    width: 200,
    height: 200,
    backgroundColor: 'rgb(74, 124, 226)',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 20,
    padding: 40,
    margin: 80,
  };
  const boxStyle = {
    flex: 1,
    backgroundColor: 'pink',
  };
  const textStyle = {
    fontSize: 40,
    // Error: type 'string' is not assignable to type '"bold" | "normal" | "100" | 
    // "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined'.
    // Fix: Using 'as' to prevent widening form 'scroll' to string
    // fontWeight: 'bold' as any,
    fontWeight: 'bold' /* as 'bold' */, // can change 'bold' to any or const
    color: 'red',
  } /* as const */;

  return (
    <SafeAreaView style={style}>
      <View style={boxStyle}>
        <Text style={textStyle}>Hello!</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
  Switch,
  TouchableHighlight,
} from 'react-native';

function App() {
  const style = {
    width: 200,
    height: 200,
    backgroundColor: 'rgb(74,124,226)',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 20,
    padding: 40,
    margin: 80,
  }
  const boxStyle = {
    flex: 1,
    backgroundColor: 'pink',
  }
  const textStyle = {
    fontSize: 40,
    // Using 'as' to prevent widening form 'scroll' to string
    // fontWeight: 'bold' as any,
    fontWeight: 'bold' as 'bold', // can change 'bold' to any or const
    color: 'red',
  } /* as const */
  return (
    <SafeAreaView style={style}/* style={styles.container} */>
      <View style={boxStyle}>
        <Text style={textStyle}>
          Hello!
        </Text>
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});

export default App;

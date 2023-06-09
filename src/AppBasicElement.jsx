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

// let height = 960
// let width = 567

// let windowHeight = Dimensions.get("window").height
// let windowWidth = Dimensions.get("window").width

// function getHeightScale(number:number) {
//   return windowHeight / height * number
// }
// function getWidthScale(number:number) {
//   return windowWidth / width * number
// }

const DashLine = () => {
  return (
    <View style={{
      height: 1,
      width: Dimensions.get('window').width,
      marginVertical: 5,
      backgroundColor: 'white'
    }}/>
  )
}

function App() {
  let number = 3
  return (
    <SafeAreaView /* style={styles.container} */>
      <Text style={styles.text}>Hello World!!!</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn.dribbble.com/userupload/3931175/file/original-a3c650d7ad8cbca11b6cc9bbb42f8cf5.png'
        }}
      />

      <Switch />

      <TextInput
        style={styles.textInput}
        value='Useless TextInput'
      />
      <TextInput
        style={[styles.textInput, { height: 100 }]}
        value='Useless MultiLine TextInput'
        multiline={true}
        numberOfLines={2}
      />

      {/* <View style={{
        height: 20,
        alignItems: 'center',
      }}>
        <Text>{number > 5 ? 'Greater than 5' : 'Less than 5'}</Text>
        {[...Array(number)].map(
          (x, i) => <Text>{i + 1}</Text>
        )}
      </View> */}

      <TouchableOpacity style={styles.button}>
        <Text>Touch me for opcaity</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.button}
        onPress={() => { }}
        underlayColor='#f00a'
      >
        <Text>Touch me for Highlight!</Text>
      </TouchableHighlight>

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
  text: {
    color: '#FFFFFF',
    fontSize: 40,
  },
  textInput: {
    height: 40,
    // backgroundColor:'green',
    marginVertical: 5,
    // paddingVertical: 0,
    // width: 200,
    borderWidth: 1,
    borderColor: 'orange',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  button: {
    borderColor: '#f00',
    backgroundColor: '#faa',
    borderWidth: 1,
    padding: 10,
  },
});

export default App;

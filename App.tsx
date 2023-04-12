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

const DashLine = ({ }) => {
  return (
    <View style={{
      height: 1,
      width: Dimensions.get('window').width,
      marginVertical: 5,
      backgroundColor: 'white'
    }}></View>
  )
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World!!!</Text>
      <TextInput
        style={styles.textInput}
        value='Useless TextInput'
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn.dribbble.com/userupload/3931175/file/original-a3c650d7ad8cbca11b6cc9bbb42f8cf5.png'
        }}
      />
      <DashLine />




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
    // marginVertical: 10,
    // paddingVertical: 0,
    // width: 200,
    borderWidth: 1,
    borderColor: 'orange',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 8,
  }
});

export default App;

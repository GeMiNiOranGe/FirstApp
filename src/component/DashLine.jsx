import React from 'react';
import {
  Dimensions,
  View,
} from 'react-native';

// let height = 960
// let width = 567

// let windowHeight = Dimensions.get("window").height
// let windowWidth = Dimensions.get("window").width

// function getHeightScale(number: number) {
//   return windowHeight / height * number
// }
// function getWidthScale(number: number) {
//   return windowWidth / width * number
// }

function DashLine() {
  return (
    <View style={{
      height: 1,
      width: Dimensions.get('window').width,
      marginVertical: 5,
      backgroundColor: 'white'
    }} />
  );
};

export default DashLine;

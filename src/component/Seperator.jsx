import React from "react";
import { View } from "react-native";

class Seperator extends React.Component {
  render() {
    return <View style={{
      height: 1,
      backgroundColor: 'white',
      marginVertical: 5,
    }} />;
  }
}

export default Seperator;

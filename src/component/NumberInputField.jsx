import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

class NumberInputField extends React.PureComponent {
  render() {
    return (
      <View style={styles.inputField}>
        <Text style={[styles.title, {
          color: this.props.color,
          fontSize: this.props.titleFontSize,
        }]}>{this.props.title}</Text>

        <TextInput
          style={[styles.textInput, {
            color: this.props.color,
          }]}
          keyboardType='numeric'
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />

        <Text style={{ color: 'red', }}>{this.props.validate && "*Invalid value"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 4,
  },
  title: {
    marginBottom: 4,
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: 'cyan',
    backgroundColor: '#262626',
  },
});

export default NumberInputField;
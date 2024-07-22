import { Component } from 'react';
import {
  Text,
} from "react-native";

class BlinkText extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';

    return (
      <Text>{display}</Text>
    );
  }
}

export default BlinkText;

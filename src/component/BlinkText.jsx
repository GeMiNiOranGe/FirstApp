import { Component } from 'react';
import {
  Text,
} from "react-native";

class BlinkText extends Component {
  #blinkTimeMillisecond = 1000;
  #interval;

  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }

  componentDidMount() {
    this.#interval = setInterval(() => {
      this.setState(prevState => ({
        isShow: !prevState.isShow,
      }));
    }, this.#blinkTimeMillisecond);
  }

  componentWillUnmount() {
    if (this.#interval) {
      clearInterval(this.#interval);
    }
  }

  render() {
    return <Text>{this.state.isShow ? this.props.children : ' '}</Text>;
  }
}

export default BlinkText;

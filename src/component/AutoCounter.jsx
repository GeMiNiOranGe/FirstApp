import React from 'react';
import { Text } from "react-native";

import {
  BgRed,
  FgBlack,
  FgCyan,
  Reset,
} from '../utilities/ConsoleColor';

class AutoCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCount: 0,
    };
  }

  // đây là ví dụ dùng componentDidMount, dùng setInterval cho cộng thêm 1 đơn vị mỗi giây
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        currentCount: this.state.currentCount + 1,
      });
    }, 1000);
  }

  // Và dùng componentWillUnmount để dọn cái setInterval đã đặt khi trước, khi mà loại bỏ component ra khỏi
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log(`${FgCyan}${this.constructor.name}${Reset}: ${BgRed}${FgBlack}${this.componentWillUnmount.name}${Reset} is called`);
  }

  render() {
    return <Text style={{ fontSize: 24, color: 'black' }}>{this.state.currentCount}</Text>;
  }
}

export default AutoCounter;
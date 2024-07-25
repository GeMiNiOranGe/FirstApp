import React from "react"
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native"

import {
  BgBlue,
  BgCyan,
  BgRed,
  BgYellow,
  FgBlack,
  FgMagenta,
  FgRed,
  FgYellow,
  Reset,
} from "../utilities/ConsoleColor";

const DECREASE_SYMBOL = '−';
const INCREASE_SYMBOL = '+';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);

    console.log(`${FgMagenta}${this.constructor.name}${Reset}: ${FgRed}contructor${Reset} is call`);
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  // componentDidMount được gọi 1 lần duy nhất trong lần render đầu tiên,
  // và KHÔNG được gọi lại lần thứ 2 trong suốt vòng đời của Counter
  componentDidMount() {
    console.log(`${FgMagenta}${this.constructor.name}${Reset}: ${BgBlue}${FgBlack}${this.componentDidMount.name}${Reset} is called`);
  }

  // componentDidUpdate được gọi khi ta bấm nút tăng hoặc giảm,
  // vì khi bấm sẽ làm thay đổi biến 'count' của state
  componentDidUpdate() {
    console.log(`${FgMagenta}${this.constructor.name}${Reset}: ${BgYellow}${FgBlack}${this.componentDidUpdate.name}${Reset} is called`);
  }

  // componentWillUnmount được gọi khi bỏ Counter khỏi App,
  // tức là khi kết thúc CounterComponent thì componentWillUnmount sẽ được gọi
  componentWillUnmount() {
    console.log(`${FgMagenta}${this.constructor.name}${Reset}: ${BgRed}${FgBlack}${this.componentWillUnmount.name}${Reset} is called`);
  }

  // shouldComponentUpdate là để xét điều kiện (mặc định là return true),
  // nếu là 'true' thì hàm render sẽ được thực thi, còn 'false' thì render sẽ không thực thi
  // và giúp cho việc tối ưu chương trình trong 1 vài trường hợp nhất định
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`${FgMagenta}${this.constructor.name}${Reset}: ${BgCyan}${FgBlack}${this.shouldComponentUpdate.name}${Reset} is called`);

    if (this.state.count === nextState.count) {
      return false;
    }
    return true;
  }

  render() {
    console.log(`${FgMagenta}${this.constructor.name}${Reset}: ${FgYellow}${this.render.name}${Reset} is called`);

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.decrease}
          underlayColor={'darkgray'}
        >
          <Text style={styles.text}>{DECREASE_SYMBOL}</Text>
        </TouchableHighlight>

        <Text style={styles.text}>{this.state.count}</Text>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.increase}
          underlayColor={'darkgray'}
        >
          <Text style={styles.text}>{INCREASE_SYMBOL}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableHighlight: {
    width: 75,
    height: 75,
    margin: 30,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 48,
  },
});

export default Counter;
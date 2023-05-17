import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const minusSymbol = '−'
const plusSymbol = '+'

//#region CounterComponent
class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }

    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)

    console.log('Called Counter contructor');
  }

  //#region hàm xử lý của Counter
  increase() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  decrease() {
    this.setState({
      count: this.state.count - 1,
    })
  }
  //#endregion

  // componentDidMount được gọi 1 lần duy nhất trong lần render đầu tiên, và KHÔNG được gọi lại lần thứ 2 trong suốt vòng đời của Counter
  componentDidMount() {
    console.log('Called Counter componentDidMount');
  }

  // componentDidUpdate được gọi khi ta bấm nút tăng hoặc giảm, vì khi bấm sẽ làm thay đổi biến 'count' của state
  componentDidUpdate() {
    console.log('Called Counter componentDidUpdate');
  }

  // componentWillUnmount được gọi khi bỏ Counter khỏi App, tức là khi kết thúc CounterComponent thì componentWillUnmount sẽ được gọi
  componentWillUnmount() {
    console.log('Called Counter componentWillUnmount');
  }

  // shouldComponentUpdate là để xét điều kiện (mặc định là return true), nếu là 'true' thì hàm render sẽ được thực thi, còn 'false' thì
  // render sẽ không thực thi và giúp cho việc tối ưu chương trình trong 1 vài trường hợp nhất định
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Called Counter shouldComponentUpdate');
    if (this.state.count === nextState.count) {
      return false
    }
    return true
  }

  render() {
    console.log('Called Counter render');

    return (
      <View style={countStyles.container}>
        <TouchableHighlight
          style={countStyles.touchableHighlight}
          onPress={this.decrease}
          underlayColor={'darkgray'}
        >
          <Text style={countStyles.text}>{minusSymbol}</Text>
        </TouchableHighlight>

        <Text style={countStyles.text}>{this.state.count}</Text>

        <TouchableHighlight
          style={countStyles.touchableHighlight}
          onPress={this.increase}
          underlayColor={'darkgray'}
        >
          <Text style={countStyles.text}>{plusSymbol}</Text>
        </TouchableHighlight>
      </View>
    )
  };
}

const countStyles = StyleSheet.create({
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
})
//#endregion

//#region AutoCounterComponent
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
    console.log('Called AutoCounter componentWillUnmount');
  }

  render() {
    return <Text style={{ fontSize: 24, color: 'black' }}>{this.state.currentCount}</Text>;
  }
}
//#endregion

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      isShowCounter: true,
    }

    this.hideCounterComponent = this.hideCounterComponent.bind(this)

    console.log('Called App contructor');
  }

  hideCounterComponent() {
    this.setState({
      isShowCounter: !this.state.isShowCounter,
    })
  }

  componentDidMount() {
    console.log('Called App componentDidMount');
  }

  render() {
    const hideOrShowText = !this.state.isShowCounter ? 'Show' : 'Hide'

    console.log('Called App render');

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Counter app
        </Text>
        <Text style={styles.subtitle}>
          An example for component lifecycle
        </Text>

        <Counter />
        
        <Text style={styles.title}>Auto counter</Text>
        {/* shorthand cho câu lệnh if */}
        {this.state.isShowCounter && <AutoCounter />}

        <Text
          style={styles.text}
          onPress={this.hideCounterComponent}
        >
          {hideOrShowText}
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 54,
    color: 'black',
  },
  subtitle: {
    fontSize: 22,
    color: 'black',
  },
  text: {
    margin: 10,
    fontSize: 14,
    textDecorationLine: 'underline',
    color: 'black',
  },
});

export default App;
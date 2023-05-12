import React from 'react';
import {
  Button,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenMovieList from '../screen/ScreenMovieListVerClass';
import ScreenMovieDetail from '../screen/ScreenMovieDetail';

const Stack = createNativeStackNavigator()

class AppMovie extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenStyles}>
          <Stack.Screen
            name='MovieList'
            component={ScreenMovieList}
            options={{ title: 'My home' }}
          />

          <Stack.Screen
            name='MovieDetail'
            component={ScreenMovieDetail}
            options={{ title: 'Detail' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const screenStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
})

export default AppMovie
// /*Example of Reac Native Life Cycle*/
// import React, { Component } from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';

// class CustomComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//     console.log('Constructor Called.');
//     this.increaseCount = this.increaseCount.bind(this)
//   }

//   UNSAFE_componentWillMount() {
//     console.log('componentWillMount called.');
//   }

//   componentDidMount() {
//     console.log('componentDidMount called.');
//   }

//   UNSAFE_componentWillReceiveProps(nextProp) {
//     console.log('componentWillReceiveProps called.', nextProp);
//   }

//   shouldComponentUpdate(nextProp, nextState) {
//     console.log('shouldComponentUpdate called.');
//     return true;
//   }

//   UNSAFE_componentWillUpdate(nextProp, nextState) {
//     console.log('componentWillUpdate called.');
//   }

//   componentDidUpdate(prevProp, prevState) {
//     console.log('componentDidUpdate called.');
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount called.');
//   }

//   componentDidCatch(error, info) {
//     console.log('componentDidCatch called.');
//   }

//   increaseCount() {
//     this.setState({ count: ++this.state.count })
//   }

//   render() {
//     console.log('render called.');
//     return (
//       <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//         <TouchableOpacity
//           style={{ borderWidth: 2, borderColor: 'white' }}
//           onPress={this.increaseCount}>
//           <Text>Language is: {this.props.name}</Text>
//           <Text>Language is: {this.state.count}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center' }}>
//         <CustomComponent name="C" />
//       </View>
//     );
//   }
// }
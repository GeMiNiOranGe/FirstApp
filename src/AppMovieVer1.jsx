import React from 'react';
import {
  Button,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenMovieList from '../screen/ScreenMovieList';
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